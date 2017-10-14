import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Sidemenu from './layout/Sidemenu';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

require('../../assets/css/main.css');

class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <AppBar title="Cryptotrader"/>
                </MuiThemeProvider>
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <Sidemenu/>
                </MuiThemeProvider>

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);