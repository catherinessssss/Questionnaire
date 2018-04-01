import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { NavBarProps } from './NavBarProps';
import AppBar from 'material-ui/AppBar';
import './NavBar.css';

const paperPlane = require('../../images/paper-plane.svg');

const PaperPlaneIcon = () => (
    <IconButton>
        <FontIcon>
            <img src={paperPlane} alt="submit-icon" className="submit-icon"/>
        </FontIcon>
    </IconButton>
);

class NavBar extends React.Component<NavBarProps, object> {

    render() {
        const { name, showMenuIconButton = true, titleStyle = { textAlign: 'left' }} = this.props;

        return (
            <AppBar
                className="navbar"
                title={name}
                showMenuIconButton={showMenuIconButton}
                titleStyle={titleStyle}
                iconElementRight={<PaperPlaneIcon/>}
            />
        );
    }
}

export default NavBar;
