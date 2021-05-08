import React, { useState, useRef } from "react";
import './index.scss'


// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import { CSSTransitionGroup } from 'react-transition-group'

var ReactCSSTransitionGroup = CSSTransitionGroup;

class Carousel extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: ''
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }

    generateItems() {
        var items = []
        var level
        console.log(' generateItems this.state.active ', this.state.active)
        for (var i = this.state.active - 1; i < this.state.active + 2; i++) {
            var index = i
            if (i < 0) {
                index = this.state.items.length + i
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length
            }
            level = this.state.active - i
            console.log(' generateItems level ', level)
            items.push(<Item key={index} id={this.state.items[index]} level={level} />)
        }
        return items
    }
    
    moveLeft() {
        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        })
    }
    
    moveRight() {
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        })
    }

    onTouchStart = e => {
        console.log(' onTouchStart e ', e.clientX)
    }

    onTouchEnd = e => {
        console.log(' onTouchEnd e ', e.clientX)
    }
    
    render() {
        return(
            <div id="carousel" className="noselect" onMouseDown={e => this.onTouchStart(e)} onMouseUp={e => this.onTouchEnd(e)}>
                <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left"></i></div>
                {/* <ReactCSSTransitionGroup 
                    transitionName={this.state.direction}>
                    {this.generateItems()}
                </ReactCSSTransitionGroup> */}
                {this.generateItems()}
                <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
            </div>
        )
    }
}

class Item extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level
        }
    }
    
    render() {
        const className = 'item level' + this.props.level
        return(
            <div className={className}>
                {this.props.id}
            </div>
        )
    }
}
export default Carousel
// var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ReactDOM.render(<Carousel items={items} active={0}/>, document.getElementById('app'))