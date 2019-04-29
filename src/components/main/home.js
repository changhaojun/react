import React, { Component } from 'react';
import { Button } from 'antd';
import './home.scss';
import moment from 'moment';
import DatepickerComponent from './../../public/common/datepickerComponent';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateParams: {
                date: [moment(new Date()).subtract(3,'days'), moment(new Date())],
                format: 'YYYY-MM-DD',
                placeholder: '关键字',
                buttonStyle: {
                    color: '#ffffff',
                    background: '#ffa509',
                    borderColor: '#ffa509'
                }
            },


            id: 13201
        }
    }

    currentChange(params) {
        console.log(params)
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
                <div className='picker'>
                    <DatepickerComponent dateParams={this.state.dateParams} currentChange={(data) => this.currentChange(data)} />
                </div>
                <div style={{paddingLeft: '20px'}}>
                    <Button onClick={() => this.details()}>详情</Button>
                </div>
            </div>
        );
    }
}
  
export default Home;