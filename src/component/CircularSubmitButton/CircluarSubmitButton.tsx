import * as React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
// import './CircularSubmitButton.css';

const paperPlane = require('../../images/paper-plane.svg');

const PaperPlaneIcon = () => (
    <img src={paperPlane} alt="submit-icon" className={'icon'} />
);

class CircularSubmitButton extends React.Component {
    constructor( props: number ) {
        super(props);
    }

    render () {

        return (
            <FloatingActionButton className="circular-button">
                <PaperPlaneIcon/>
            </FloatingActionButton>
        );
    }
}

export default CircularSubmitButton;
