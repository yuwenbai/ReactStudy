const { override, addWebpackPlugin, addDecoratorsLegacy, addLessLoader, addWebpackAlias } = require('customize-cra');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const path = require('path');
// 自己定义一个函数，过滤config.plugins数组
const removeHtmlWebpackPlugin = () => {
  return (config) => {
    config.plugins = config.plugins.filter(
      p => p.constructor.name !== "HtmlWebpackPlugin"
    );
    // throw new Error()
    return config;
  }
}

module.exports = {
  // webpack:override(
  //     addDecoratorsLegacy(),
  //     removeHtmlWebpackPlugin(),
  //     addWebpackAlias({
  //       '@': path.resolve(__dirname, 'src/'),
  //     }),
  //     addWebpackPlugin(
  //       new HtmlWebpackPlugin({
  //         inlineSource: '.(js|css)'
  //     }),
  //       new HtmlWebpackInlineSourcePlugin()
  //     )
  //   )

    webpack:override(
      addWebpackAlias({
          ["@"]: path.resolve(__dirname, 'src'),
      }),
      /* addWebpackResolve({
          modules:[
              path.resolve(__dirname, 'src'),
              path.resolve('node_modules')
          ],
      }), */
      (config,env)=>{
          console.log('env1: ',config)
          return config;
      },
      (config)=>{
        console.log(' config ' , config)
          config.plugins = [
              ...config.plugins,
              new HtmlWebpackPlugin({  // Also generate a test.html
                filename: 'test.html',
                template: 'index.html',
                inject: true|'body',
                inlineSource: '.(js|css)'
              }),
              // new HtmlWebpackPlugin({inlineSource: '.(js|css)'}),
              // new HtmlWebpackPlugin(),
              new HtmlWebpackInlineSourcePlugin()
              // new HashedModuleIdsPlugin(), // 根据模块的相对路径生成 HASH 作为模块 ID
              // new WebpackDeepScopeAnalysisPlugin(),  // 深层次打包引用分析
          ];
          console.log('env2: ',config)
          return config
      },
      (config)=>{
        console.log('env3: ',config)
          config.optimization.runtimeChunk = 'single';
          config.optimization.splitChunks =  {
              chunks: 'all',
              minSize: 10000, // 提高缓存利用率，这需要在http2/spdy
              maxSize: 0,//没有限制
              minChunks: 3,// 共享最少的chunk数，使用次数超过这个值才会被提取
              maxAsyncRequests: 5,//最多的异步chunk数
              maxInitialRequests: 5,// 最多的同步chunks数
              automaticNameDelimiter: '~',// 多页面共用chunk命名分隔符
              name: true,
              cacheGroups: {// 声明的公共chunk
                vendor: {
                 // 过滤需要打入的模块
                  test: module => {
                    if (module.resource) {
                      const include = [/[\\/]node_modules[\\/]/].every(reg => {
                        return reg.test(module.resource);
                      });
                      const exclude = [/[\\/]node_modules[\\/](react|redux)/].some(reg => {
                        return reg.test(module.resource);
                      });
                      return include && !exclude;
                    }
                    return false;
                  },
                  name: 'vendor',
                  priority: 50,// 确定模块打入的优先级
                  reuseExistingChunk: true,// 使用复用已经存在的模块
                },
                react: {
                  test({ resource }) {
                    return /[\\/]node_modules[\\/](react|redux)/.test(resource);
                  },
                  name: 'react',
                  priority: 20,
                  reuseExistingChunk: true,
                }
              },
          };
        
          return config
      },
  ),
}