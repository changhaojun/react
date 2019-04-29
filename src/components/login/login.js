import React, { Component } from 'react';
import $http from './../../public/server';
import { Button } from 'antd';
import './login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: 'dtrl@qq.com',
                password: '555555'
            }
        }
    }

    async login() {
        const res = await $http.post('user/login', this.state.user);
        console.log(res);
        this.props.history.push({
            pathname: '/main/home'
        })
    }
  
    render() {
        return (
            <div className="login">
                <Button type="primary" onClick={() => this.login()}>登录</Button >
            </div>
        );
    }
}

  
export default Login;