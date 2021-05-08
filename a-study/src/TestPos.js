import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
// 引入 CitySelect 组件
// import CitySelect from 'react-city-select';
import CitySelect from './lib/CitySelect'
import data1 from './lib/data.json'
import './TestPos.scss'
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
export default class TestPos extends Component {
  static proTypes = {
    comment: PropTypes.string,
  };

  constructor() {
    super();
  }

  // 选中城市回调
  handleSelectCity(cityData) {
    console.log('选中数据项:', cityData);
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
      <div className="TestPos">
        <div className="TestRight"></div>
      {/* <CitySelect
        data={this.state.citysData}
        config={this.state.config}
        onSelectItem={this.handleSelectCity.bind(this)}>
      </CitySelect> */}
      </div>
    );
  }
}
