import * as React from 'react';
import { NavBarInterface } from './NavBarInterface';
import './NavBar.css';
import AppBar from 'material-ui/AppBar';

class NavBar extends React.Component<NavBarInterface, object> {

    render() {
        const { name, showMenuIconButton = true, titleStyle = { textAlign: 'center' }} = this.props;

        return (
            <AppBar className="navbar" title={name} showMenuIconButton={showMenuIconButton} titleStyle={titleStyle}/>
        );
    }
}

export default NavBar;
