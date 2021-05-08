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
    this.noniusEleHeight = 100;
    // 检索区域具体顶部高度
    this.noniusEleTop = 20;
  }




  componentDidMount() {
    log('init success');
    if (this.props.data) {
      log('init success');
      // const noniusEle = document.querySelector(`.${styles.nonius}`);
      // const noniusEleChild = document.querySelector(`.${styles.nonius} > .${styles['keys-item']}`);
      
      this.listTitleDom = document.querySelectorAll(`.section-title`);
      console.log('this.listTitleDom ', this.listTitleDom)

      // this.noniusEleTop = noniusEle.getClientRects()[0].top;
      // this.noniusEleHeight = noniusEleChild.clientHeight;

      // 单独声明 touchmove 事件，解决页面滚动问题
      console.log(' 111 nonius is ', document.querySelector(`.nonius`))
      // document.querySelector(`.nonius`).addEventListener("touchmove", (e) => {
      //   this.sidebarTouchMove(e)
      // }, {
      //     passive: false // react 绑定事件默认为 true
      //   })

      // 单独声明 touchmove 事件，解决页面滚动问题
      document.querySelector(`.nonius`).addEventListener("mousemove", (e) => {
        // console.log(' mouse move')
        this.sidebarTouchMove(e)
      }, {
          passive: false // react 绑定事件默认为 true
        })

    }
  }

  // 游标位置合法检测
  onScrollIndexCheck() {
    console.log(' this.listTitleDom is ', this.listTitleDom)
    // this.onScrollIndex = parseInt((this.scrollEleTop - this.noniusEleTop) / this.noniusEleHeight, 10);
    // console.log('this.scrollEleTop ', this.scrollEleTop)
    // console.log('this.noniusEleTop ', this.noniusEleTop)
    // console.log('this.noniusEleHeight ', this.noniusEleHeight)
    // if (this.onScrollIndex < 0) {
    //   this.onScrollIndex = 0;
    // }

    // if (this.onScrollIndex >= this.listTitleDom.length - 1) {
    //   this.onScrollIndex = this.listTitleDom.length - 1;
    // }
  }

  // 开始滑动字母检索区域
  sidebarTouchStart(e) {
    console.log(' sidebarTouchStart ')
    this.scrollEleTop = e.screenY;
    this.touchDown = true
    // this.onScrollIndexCheck();
    this.setState({
      isShowSelectText: true,
      onSelectText: this.state.noniusKeys[this.onScrollIndex],
    })
  }


  // 正在滑动字母检索区域
  sidebarTouchMove(e) {
    // console.log('1111 sidebarTouchMove ', e)
    if(!this.touchDown)
    return
    e.preventDefault();
    // this.scrollEleTop = e.touches[0].clientY;
    this.scrollEleTop = e.screenY;
    // this.onScrollIndexCheck();
    this.setState({
      isShowSelectText: true,
      onSelectText: this.state.noniusKeys[this.onScrollIndex],
    })
  }

  sidebarTouchLeave(e){
    this.touchDown = false
    this.setState({
      isShowSelectText: false,
    })
  }
  // 滑动字母检索区域结束，处理列表跳转
  sidebarTouchEnd(e) {
    // console.log(' sidebarTouchEnd ')
    // this.touchDown = false
    // this.setState({
    //   isShowSelectText: false,
    // })
    // this.onScrollIndexCheck();
    // const target = this.listTitleDom[this.onScrollIndex];
    // console.log(' this.listTitleDom is ', this.listTitleDom)
    // console.log(' this.onScrollIndex is ', this.onScrollIndex)
    // // console.log('sidebarTouchEnd ', target)
    // window.scrollTo(0, target.offsetTop);
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

  onClick = (index) => {
    console.log('onClick ', index)
    this.onScrollIndex = index;
    const target = this.listTitleDom[this.onScrollIndex];
    console.log(' this.listTitleDom is ', this.listTitleDom)
    console.log(' this.onScrollIndex is ', this.onScrollIndex)
    // console.log('sidebarTouchEnd ', target)
    window.scrollTo(0, target.offsetTop);
  }

  render() {
    if (!this.props.data) return false;
    let itemList = [];
    // for(let i = 0; i < this.state.dataKeys.length; i++) {
      this.state.dataKeys.map((secKey, secIndex) => {
        itemList.push(<div key={secIndex}
          className={this.state.currentIndex === secIndex ? 'active' : ''}
          index={secIndex} onClick={() => this.onClick(secIndex)}
        >{this.configAttr(secKey, 'title') || secKey}</div>);
      })

    // }
    return (
      <div className="phonelogin-frame">
      {/* <div className={styles.clSearchComponent}> */}
        {/* 检索游标 */}
        <div className='nonius'
          onMouseDown={this.sidebarTouchStart.bind(this)}
          onMouseUp={this.sidebarTouchEnd.bind(this)}
          onMouseLeave={this.sidebarTouchLeave.bind(this)}
        >
          {/* 检索游标键值列表 */}
          {/* {this.state.dataKeys.map((secKey, secIndex) =>
            <div className='keys-item' key={secIndex}>
              {this.configAttrImg(secKey, 'icon') || this.configAttr(secKey, 'key') || this.configAttr(secKey, 'title') || secKey}
            </div>
          )} */}

          <div> {itemList}</div>
          {/* {itemList.map((sec, secIndex) =>
            <div>{sec}</div>
          )} */}

        </div>

        {/* 滑动选中标识 */}
        {/* {this.state.isShowSelectText ? <div className='on-select'>
          {this.state.onSelectText}
        </div> : null} */}

        {/* 数据列表 */}
        <div className="section-base">
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