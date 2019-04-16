import React, { Component } from 'react';

export default class HomeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            msg: ''
        }
    }
    
    componentDidMount() {
        // 获取传递的参数
        const {state} = this.props.location;
        const result = JSON.parse(state.result); 
        this.setState({
            id: state.id,
            title: state.title,
            msg: result.msg
        })
        // 改变menu状态
        document.querySelector('.header-menu').querySelectorAll('a')[0].classList.add('active-router');
    }
    componentWillUnmount() {
        // 销毁时删除添加的menu状态
        if(document.querySelector('.header-menu')) {
            document.querySelector('.header-menu').querySelectorAll('a')[0].classList.remove('active-router');
        }
    }

    render() {
        return (
            <div>
                details
                <div>{this.state.id}-{this.state.title}-{this.state.msg}</div>
            </div>
        )
    }
}