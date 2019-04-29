import React, { Component } from 'react';
import {DatePicker, Button, Input, Icon} from 'antd';
import moment from 'moment';
import './detapickerComponent.scss';
const {RangePicker} = DatePicker;

export default class DatepickerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: [],
            format: '',
            buttonStyle: {},
            placeholder: '',

            buttons: ['72小时', '近7天', '近30天'],
            indexActive: 1,

            currentParams: {
                startTime: '',
                endTime: '',
                key: ''
            }
        }
    }

    componentWillMount() {
        const dateParams = this.props.dateParams;
        this.setState({
            date: dateParams.date,
            format: dateParams.format,
            placeholder: dateParams.placeholder,
            buttonStyle: dateParams.buttonStyle ? dateParams.buttonStyle : {},
            currentParams: Object.assign({}, this.state.currentParams, {
                startTime: dateParams.date[0].format(dateParams.format),
                endTime: moment(dateParams.date[1]).add(1, 'days').format(dateParams.format)
            })
        })
    }
    changeDate(date, dateString) {
        this.setState({date: date})
        let data = Object.assign({}, this.state.currentParams,
            {startTime: moment(dateString[0]).format(this.state.format)},
            {endTime: moment(dateString[1]).add(1, 'days').format(this.state.format)},
        )
        this.setState({currentParams: data}, () => {
            this.send();
        })
        this.setState({indexActive: 0});
        
    }
    changeBtn(index) {
        let start = null;
        if(index === 1) {
            start = moment().subtract(3,'days');
        }else if(index === 2) {
            start = moment().subtract(7,'days');
        }else {
            start = moment().subtract(30,'days');
        }
        const startTime = start.format(this.state.format + ' HH');
        const endTime = moment().format(this.state.format + ' HH');
        let data = Object.assign({}, this.state.currentParams, {startTime: startTime}, {endTime: endTime});
        this.setState({currentParams: data}, () => {
            this.send();
        })

        const date = [start, moment(new Date())];
        this.setState({date: date})
        
        this.setState({indexActive: index})
    }
    changeKey(event) {
        const value = event.target.value;
        let data = Object.assign({}, this.state.currentParams, {key: value});
        this.setState({currentParams: data});
    }
    search(ev) {
        if (ev.type === 'click' || ev.key === 'Enter') {
            this.send();
        }
    }
    send() {
        this.props.currentChange(this.state.currentParams);
    }

    render() {
        return (
            <div className='datepicker'>
                <div className='date-content'>
                    <RangePicker
                        value={this.state.date}
                        format={this.state.format}
                        allowClear={false}
                        separator='-'
                        onChange={(date, dateString) => this.changeDate(date, dateString)}
                    />
                    {
                        this.state.buttonStyle.color ? (
                            this.state.buttons.map((button,index) => {
                                return (
                                    <Button
                                        style={this.state.indexActive === index+1 ? this.state.buttonStyle : {}}
                                        type="ghost" 
                                        key={index} 
                                        onClick={() => this.changeBtn(index+1)}
                                    >
                                        {button}
                                    </Button>
                                )
                            })
                        ) : <div></div>
                        
                    }
                </div>
                {
                    this.state.placeholder ? (
                        <div className='search' onKeyDown={(ev) => this.search(ev)}>
                            <Input
                                placeholder={this.state.placeholder}
                                onChange={(e) => this.changeKey(e)}
                                style={{ width: 200 }}
                            />
                            <Icon type="search" onClick={(ev) => this.search(ev)} />
                        </div>
                    ) : <div></div>
                } 
            </div>
        )
    }
}