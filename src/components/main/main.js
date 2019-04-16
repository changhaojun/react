import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './main.scss';


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <div className="main">
                <div className='main-header'>
                    <h3 className="header-logo">12</h3>
                    <ul className="header-menu">
                        <li><NavLink to="/main/home" className="router-nav" activeClassName='active-router'>首页</NavLink></li>
                        <li><NavLink to="/main/onlineMonitor" className="router-nav" activeClassName='active-router'>在线监测</NavLink></li>
                        <li><NavLink to="/main/roomMap" className="router-nav" activeClassName='active-router'>室温地图</NavLink></li>
                        <li><NavLink to="/main/dataSearch" className="router-nav" activeClassName='active-router'>查询数据</NavLink></li>
                        <li><NavLink to="/main/warnRecord" className="router-nav" activeClassName='active-router'>告警记录</NavLink></li>
                        <li><NavLink to="/main/analysis" className="router-nav" activeClassName='active-router'>统计分析</NavLink></li>
                    </ul>
                    <div className='quit'>
                        <NavLink to="/" className="router-nav" >退出</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}