import React from "react";
import PropTypes from 'prop-types';
// 引入组件样式
// import styles from './citySelect.scss';
import './index.scss'
import data from './data.json';
import iconSrc from './icon.png';

function log(info) {
  console.log(`%c react-city-select %c ${info} %c`, "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff", "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff", "background:transparent");
}

export default class CitySelect extends React.Component {
  
  constructor(props) {
    super(props);

    const dataKeys = Object.keys(this.props.data).map(secKey => secKey);
    // 根据数据项 键值 或 label属性 提取标识
    const noniusKeys = Object.keys(this.props.data).map((secKey, secIndex) => secKey);

    if (this.props.config) {
      for (const key in this.props.config) {
        if (this.props.config.hasOwnProperty(key)) {
          const pos = noniusKeys.indexOf(key);
          if (pos > -1) {
            noniusKeys[pos] = this.props.config[key]['key'] || this.props.config[key]['title'] || noniusKeys[pos];
          }
        }
      }
    }


    this.state = {
      onSelectText: '',  // 当前滑动位置标识文案
      isShowSelectText: false,  // 是否展示文案
      dataKeys: dataKeys,
      noniusKeys: noniusKeys,
    };

    // 当前滑动字母位置    
    this.onScrollIndex = 0;
    // 列表元素 DOM
    this.listTitleDom = [];
    // 检索区域总高度
    this.noniusEleHeight = 200;
    // 检索区域具体顶部高度
    this.noniusEleTop = 0;
  }




  componentDidMount() {
    if (this.props.data) {
      log('init success');
      // const noniusEle = document.querySelector(`.${styles.nonius}`);
      // const noniusEleChild = document.querySelector(`.${styles.nonius} > .${styles['keys-item']}`);
      
      this.listTitleDom = document.querySelectorAll(`.section-title`);
      console.log('this.listTitleDom ', this.listTitleDom)

      // this.noniusEleTop = noniusEle.getClientRects()[0].top;
      this.noniusEleTop = 20
      // this.noniusEleHeight = noniusEleChild.clientHeight;
      this.noniusEleHeight = 40

      // 单独声明 touchmove 事件，解决页面滚动问题
      document.querySelector(`.nonius`).addEventListener("touchmove", (e) => {
        this.sidebarTouchMove(e)
      }, {
          passive: false // react 绑定事件默认为 true
        })
    }
  }

  // 游标位置合法检测
  onScrollIndexCheck() {
    this.onScrollIndex = parseInt((this.scrollEleTop - this.noniusEleTop) / this.noniusEleHeight, 10);
    console.log('this.scrollEleTop ', this.scrollEleTop)
    console.log('this.noniusEleTop ', this.noniusEleTop)
    console.log('this.noniusEleHeight ', this.noniusEleHeight)
    if (this.onScrollIndex < 0) {
      this.onScrollIndex = 0;
    }

    if (this.onScrollIndex >= this.listTitleDom.length - 1) {
      this.onScrollIndex = this.listTitleDom.length - 1;
    }
  }

  // 开始滑动字母检索区域
  sidebarTouchStart(e) {
    this.scrollEleTop = e.touches[0].clientY;
    this.onScrollIndexCheck();
    this.setState({
      isShowSelectText: true,
      onSelectText: this.state.noniusKeys[this.onScrollIndex],
    })
  }


  // 正在滑动字母检索区域
  sidebarTouchMove(e) {
    console.log('1111 sidebarTouchMove screenX ' ,e.screenY)
    e.preventDefault();
    // this.scrollEleTop = e.touches[0].clientY;
    this.scrollEleTop = e.screenY;
    this.onScrollIndexCheck();
    this.setState({
      isShowSelectText: true,
      onSelectText: this.state.noniusKeys[this.onScrollIndex],
    })
  }

  // 滑动字母检索区域结束，处理列表跳转
  sidebarTouchEnd(e) {
    this.setState({
      isShowSelectText: false,
    })
    this.onScrollIndexCheck();
    const target = this.listTitleDom[this.onScrollIndex];
    console.log(' this.listTitleDom is ', this.listTitleDom)
    console.log(' this.onScrollIndex is ', this.onScrollIndex)
    console.log('sidebarTouchEnd ', target)
    window.scrollTo(0, target.offsetTop);
  }

  configAttr(key, attr) {
    let res = null;
    if (this.props.config) {
      return this.props.config[key] && this.props.config[key][attr] ? this.props.config[key][attr] : null;
    }
    return res;
  }

  configAttrImg(key, attr) {
    let res = null;
    if (this.props.config) {
      res = this.props.config[key] && this.props.config[key][attr] ? <img src={this.props.config[key][attr]} alt="" /> : null;
    }
    return res;
  }

  render() {
    if (!this.props.data) return false;
    return (
      <div className="phonelogin-frame">
      {/* <div className={styles.clSearchComponent}> */}
        {/* 检索游标 */}
        <div className='nonius'
          onTouchStart={this.sidebarTouchStart.bind(this)}
          onTouchEnd={this.sidebarTouchEnd.bind(this)}
        >
          {/* 检索游标键值列表 */}
          {this.state.dataKeys.map((secKey, secIndex) =>
            <div className='keys-item' key={secIndex}>
              {this.configAttrImg(secKey, 'icon') || this.configAttr(secKey, 'key') || this.configAttr(secKey, 'title') || secKey}
            </div>
          )}
        </div>

        {/* 滑动选中标识 */}
        {this.state.isShowSelectText ? <div className='on-select'>
          {this.state.onSelectText}
        </div> : null}

        {/* 数据列表 */}
        <div>
          {Object.keys(this.props.data).map((sec, secIndex) =>
            <div className='section'
              id={secIndex} key={secIndex}>
              <div className='section-title'>{this.configAttr(sec, 'title') || sec}</div>
              <div className=''>
                {this.props.data[sec].map((item, itemIndex) => <div
                  onClick={this.props.onSelectItem.bind(this, item)}
                  key={itemIndex}>{item.name}</div>)}
              </div>
            </div>
          )}

        </div>
      </div>
    )
  }
}

// 默认Props 
CitySelect.defaultProps = {
  data: data.indexCitys,
  config: {
    pos: {
      icon: iconSrc,
      title: '定位城市',
    },
    hot: {
      title: '热门城市',
      key: '热门',
      style: 'grid',
    }
  }      
}

// 类型检查
CitySelect.propTypes = {
  data: PropTypes.object,
  config: PropTypes.object,
  onSelectItem: PropTypes.func.isRequired,
}