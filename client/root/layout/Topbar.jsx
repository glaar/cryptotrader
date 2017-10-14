import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';

const Topbar = () => (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <AppBar title="Cryptotrader" />
        </MuiThemeProvider>
);

export default Topbar;
