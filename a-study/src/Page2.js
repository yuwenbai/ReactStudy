import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import NativeAPI from '@huohua/native-api';
// import * as HybridAPI from '@/vendor/hybrid-api';
// 引入 CitySelect 组件
// import CitySelect from 'react-city-select';
import CitySelect from './lib/CitySelect'
import data1 from './lib/data.json'
import './CitySelectFrame.scss'
import TestPos from "./TestPos";
const data = {
  // 定位数据项
"pos": [{
  "id": "110100",
  "name": "北京"
}],
// 热门数据项
"hot": [{
    "id": "110100",
    "name": "北京"
  },
  {
    "id": "120100",
    "name": "天津"
  },
  {
    "id": "130100",
    "name": "石家庄"
  }
],
// 字母数据项
"A": [{
    "id": "152900",
    "name": "阿拉善盟"
  },
  {
    "id": "210300",
    "name": "鞍山"
  }
],
"B": [{
    "id": "110100",
    "name": "北京"
  },
  {
    "id": "130500",
    "name": "保定"
  },
  {
    "id": "130601",
    "name": "保定"
  },
  {
    "id": "130602",
    "name": "保定"
  },
  {
    "id": "130603",
    "name": "保定"
  }
]
}
export default class Page2 extends Component {
  static proTypes = {
    comment: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      content: "<h1>React.js 小书111</h1>",
        // 结构化城市列表数据
        citysData: data1.indexCitys, 
        // 对某项数据定制化配置
        config: {
          pos: {
            // icon: iconSrc, // 游标图标
            title: '定位',
          },
          hot: {
            title: '热门',
            key: '热门',
            style: 'line', // 展示形式（ line || grid）
          }
        }
    };
  }

  nativePageGo({ url, title, isShowNativeTitle: isShowTitle, router = window.g_history, routerType = 0, description, image }, options = {}) {
    if (!url) {
        console.warn('url is required');
        return false;
    }
    if (true && !options.noNewWindow) {
        try {
            // HybridAPI.localStorage.setItem('HUOHUA_REFER', window.location.href);
        } catch (e) {
            console.error(e);
        }
        const path = this.fomartUrl(url);
        if (String(routerType) === '1') {
            // 0:webview类型-火花域名活动页，或原生页;1:浏览器类型-微信图文消息;2:不需要 - 配置页面有自带导航头
            NativeAPI.isSupported('app.createBrowserView').then(result => {
                // 判断native是否支持createBrowserView api
                if (result) {
                    NativeAPI.createBrowserView({
                        url: path,
                        title,
                        description,
                        image,
                    });
                } else {
                    NativeAPI.createWebView({
                        url: path,
                        isShowTitle,
                        title
                    });
                }
            });
        } else {
            NativeAPI.createWebView({
                url: path,
                isShowTitle,
                title
            });
        }
    } else {
        if (/^https?/.test(url) || options.isHref) {
            window.location.href = url;
        } else {
            // if(url.indexOf('/v2') !== 0){
            //     url = window.g_path + url;
            // }
            const routerMethod = options?.useReplace ? 'replace' : 'push';
            router[routerMethod](url);
        }
    }
}
 fomartUrl (url) {
  let path = url;
  if (path[0] === '/') {
      path = `${window.location.origin}${path}`;
  }
  // peppa UI 给iOS链接前端转成Android能看的链接
  const reg = /peppa:\/\/ui\//;
  if (reg.test(path)) {
      path = false ? path.replace('peppa://ui/', 'http://peppa-ui/') : path;
  }
  path = encodeURI(path);
  return path;
}
  // 选中城市回调
  handleSelectCity(cityData) {
    console.log('选中数据项:', cityData);
    this.nativePageGo({url: 'https://www.baidu.com'});
  }

  render() {
    // const { comment } = this.props.comment;
    return (
      // <div className="card">
      //   <div className="card-content">
      //     <div>我是card</div>
      //     <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
      //     {/* <div>{this.props.comment}</div> */}
      //     {this.props.children}
      //     <div>我是card over 2</div>
      //     <Link to={'/about'}>Open Modal</Link> 
      //   </div>
      // </div>
      <div className="CitySelectFrame">
        <div onClick={()=>this.handleSelectCity()}> dian dian dian </div>
        {/* <TestPos/> */}
      {/* <CitySelect
        data={this.state.citysData}
        config={this.state.config}
        onSelectItem={this.handleSelectCity.bind(this)}>
      </CitySelect> */}
      </div>
    );
  }
}
