import React, { Component } from 'react';
import './home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 13201
        }
    }

    details() {
        const data = {
            id: this.state.id,
            title: 'zdfb',
            result: JSON.stringify({ // 传递的参数只能是字符串
                msg: 'fd'
            })
        }
        this.props.history.push({
            pathname: '/main/homeDetails',
            state: data
        })
    }
  
    render() {
        return (
            <div className='home'>
                <div>
                </div>
                <div>home</div>
                <button onClick={() => this.details()}>详情</button>
            </div>
        );
    }
}
  
export default Home;