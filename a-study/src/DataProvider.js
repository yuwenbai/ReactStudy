import React, {useState, useEffect}from "react";
export default class DataProvider extends React.Component {
    state = {
        data: {
            target: 'world'
        }
    }
    render() {
        return this.props.render(this.state)
    }
}