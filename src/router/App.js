import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';

import Login from './../components/login/login';
import Main from './../components/main/main';
import Home from './../components/main/home';
import HomeDetails from './../components/main/homeDetails';
import OnlineMonitor from './../components/main/onlineMonitor';
import RoomMap from './../components/main/roomMap';
import DataSearch from './../components/main/dataSearch';
import WarnRecord from './../components/main/warnRecord';
import Analysis from './../components/main/analysis';


export default class App extends React.Component {
    render() {
        return(
            <Router>
                <div style={{height: '100%'}}>
                    <Route exact path='/' component={Login}></Route>
                    <Route path='/main' component={Main}></Route>
                    <div className="main-content" style={{height: 'calc(100% - 60px)'}}>
                        <Route path='/main/home' component={Home}></Route>
                        <Route path='/main/homeDetails' component={HomeDetails}></Route>
                        <Route path='/main/onlineMonitor' component={OnlineMonitor}></Route>
                        <Route path='/main/roomMap' component={RoomMap}></Route>
                        <Route path='/main/dataSearch' component={DataSearch}></Route>
                        <Route path='/main/warnRecord' component={WarnRecord}></Route>
                        <Route path='/main/analysis' component={Analysis}></Route>
                    </div>
                </div>
            </Router>
        )
    }
}











// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
