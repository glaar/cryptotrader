import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Sidemenu from './layout/Sidemenu';
import Topbar from './layout/Topbar';

require('../../assets/css/main.css');



class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Topbar/>
                </div>
                <div>
                    <Sidemenu />
                </div>
                <div id="container">
                   <p>container</p>
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);