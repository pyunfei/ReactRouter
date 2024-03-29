import React, { Component } from 'react'
import { Consumer } from './context'
class Redirect extends Component {
    render() {
        return <Consumer>
            {state => {
                //重定向就是匹配不到后直接跳转到redirect中的to的路径的
                state.history.push(this.props.to);
                return null
            }}
        </Consumer>
    }
}

export default Redirect;