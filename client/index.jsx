import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Topbar from './layout/Topbar';
import Sidemenu from './layout/Sidemenu';

import Markets from './markets/markets';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

require('../assets/css/main.css');


const Home = () => (
  <div>
    <h1>Cryptotrader</h1>
  </div>
);

const Autotrade = () => (
    <div>
        <h1>Autotrade</h1>
    </div>
);
const Wallet = () => (
    <div>
        <h1>Wallet</h1>
    </div>
);

const Orders= () => (
    <div>
        <h1>Orders</h1>
    </div>
);
const Settings = () => (
    <div>
        <h1>Settings</h1>
    </div>
);


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/api' component={Markets}/>
            <Route path='/api/autotrade' component={Autotrade}/>
            <Route path='/api/wallet' component={Wallet}/>
            <Route path='/api/markets' component={Markets}/>
            <Route path='/api/orders' component={Orders}/>
            <Route path='/api/settings' component={Settings}/>
        </Switch>
    </main>
);


const App = () => (
    <div>
        <Topbar />
        <Sidemenu />
        <div id="container">
            <Main />
        </div>
    </div>
);


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('app'));