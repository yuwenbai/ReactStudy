import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";

export default class Card extends Component {
  static proTypes = {
    comment: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      content: "<h1>React.js 小书111</h1>",
    };
  }

  render() {
    const { comment } = this.props.comment;
    return (
      <div className="card">
        <div className="card-content">
          <div>我是card</div>
          <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
          <div>{this.props.comment}</div>
          {this.props.children}
          <div>我是card over</div>
        </div>
      </div>
    );
  }
}
