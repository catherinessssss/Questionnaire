import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import './SubmitButton.css';

class SubmitButton extends React.Component {
    constructor( props: number ) {
        super(props);
    }

    render () {
        return (
            <RaisedButton
                label="Submit"
                fullWidth={true}
                icon={<FontIcon className="muidocs-icon-custom-github" />}
            />
        );
    }
}

export default SubmitButton;
