import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { CardActions } from 'material-ui/Card';
import './Accordance3.css';

class Accordance3 extends React.Component {
    constructor( props: number ) {
        super(props);
    }

    render() {
        return (
            <CardActions>
                <RaisedButton className="raised-button" label="全部一致" primary={true} fullWidth={true}/>
                <RaisedButton className="raised-button" label="部分一致" fullWidth={true}/>
                <RaisedButton className="raised-button" label="不一致" secondary={true} fullWidth={true}/>
            </CardActions>
        );
    }
}

export default Accordance3;
