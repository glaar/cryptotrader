import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Link } from 'react-router-dom'


const style = {
    paper: {
        display: 'inline-block',
        float: 'left',
        margin: '16px 32px 16px 0',
    },
    rightIcon: {
        textAlign: 'center',
        lineHeight: '24px',
    },
};

const Sidemenu = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
            <Paper style={style.paper}>
                <Menu>
                    <MenuItem primaryText="Autotrade" containerElement={<Link to="/api/autotrade" />} leftIcon={<RemoveRedEye />} />
                    <MenuItem primaryText="Wallet" containerElement={<Link to="/api/wallet" />} leftIcon={<PersonAdd />} />
                    <MenuItem primaryText="Markets" containerElement={<Link to="/api/markets" />} leftIcon={<ContentLink />} />
                    <Divider />
                    <MenuItem primaryText="Orders" containerElement={<Link to="/api/orders" />} leftIcon={<ContentCopy />} />
                    <MenuItem primaryText="Settings" containerElement={<Link to="/api/settings" />} leftIcon={<Download />} />
                    <Divider />
                    <MenuItem primaryText="Log out" containerElement={<Link to="/api/logout" />} leftIcon={<Delete />} />
                </Menu>
            </Paper>
        </div>
    </MuiThemeProvider>

);

export default Sidemenu;
