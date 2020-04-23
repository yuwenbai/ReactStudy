import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './Action'

class Counter extends React.Component {
    // state = { count: 0 }; // 删除
  
    increment = () => {
      /*
      // 删除
      this.setState({
        count: this.state.count + 1
      });
      */
    //  this.props.dispatch(increment()); // << 在这使用
      this.props.increment()
    };
  
    decrement = () => {
      /*
      // 同样删除
      this.setState({
        count: this.state.count - 1
      });
      */
     this.props.decrement()
    };
  
    render() {
      return (
        <div className="counter">
          <h2>Counter</h2>
          <div>
            <button onClick={this.decrement}>-</button>
            <span className="count">{
              this.props.count
            }</span>
                        <span className="count">{
              100000
            }</span>
            <button onClick={this.increment}>+</button>
          </div>
        </div>
      );
    }
  }
  // 添加这个函数:
function mapStateToProps(state) {
    return {
      count: state.reducercount
    };
  }
  const mapDispatchToProps = {
    increment,
    decrement
  };
  // 然后把:
  // export default Counter;
  
  // 替换成:
  export default connect(mapStateToProps, mapDispatchToProps)(Counter);

  