import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Topbar from './layout/Topbar';
import Sidemenu from './layout/Sidemenu';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Wallet from './wallet/wallet';
import Autotrade from './autotrade/autotrade';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import {ButtonToolbar, DropdownButton, MenuItem} from "react-bootstrap";

//Import CSS
require("../assets/css/main.css");

const Home = () => (
  <div>
    <h1>Cryptotrader</h1>
      <ButtonToolbar>
          <DropdownButton
              bsStyle="default"
              title="No caret"
              noCaret
              id="dropdown-no-caret">
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
      </ButtonToolbar>
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
            <Route exact path='/' component={Home}/>
            <Route path='/api/autotrade' component={Autotrade}/>
            <Route path='/api/wallet' component={Wallet}/>
            <Route path='/api/orders' component={Orders}/>
            <Route path='/api/settings' component={Settings}/>
        </Switch>
    </main>
);


const App = () => (
    <MuiThemeProvider>
        <div>
            <Topbar />
            <Sidemenu />
            <div id="container">
                <Main />
            </div>
        </div>
    </MuiThemeProvider>
);


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('app'));