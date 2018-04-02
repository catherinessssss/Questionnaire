import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { NavBarProps } from './NavBarProps';
import AppBar from 'material-ui/AppBar';
import './NavBar.css';

const paperPlane = require('../../images/paper-plane.svg');

class NavBar extends React.Component<NavBarProps, object> {
    PaperPlaneIcon = () => (
        <IconButton onClick={this.onUpdateParentState}>
            <FontIcon>
                <img src={paperPlane} alt="submit-icon" className="submit-icon"/>
            </FontIcon>
        </IconButton>
    )

    onUpdateParentState = (event: object): void => {
        this.props.updateParentState();
    }

    render() {
        const { name, showMenuIconButton = true, titleStyle = { textAlign: 'left' }} = this.props;

        return (
            <AppBar
                className="navbar"
                title={name}
                showMenuIconButton={showMenuIconButton}
                titleStyle={titleStyle}
                iconElementRight={<this.PaperPlaneIcon/>}
                onRightIconButtonClick={this.onUpdateParentState}
            />
        );
    }
}

export default NavBar;
