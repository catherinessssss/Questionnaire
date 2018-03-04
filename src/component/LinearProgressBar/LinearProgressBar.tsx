import * as React from 'react';
import './LinearProgressBar.css';
// import { LinearProgressBarInterface } from './LinearProgressBarInterface';
import LinearProgress from 'material-ui/LinearProgress';

class LinearProgressBar extends React.Component {

    constructor( props: number ) {
        super(props);

        this.state = {
            completed: 1
        };
    }

    // this.setState((prevState, props) => ({
    //     counter: prevState.counter + props.increment
    // }));

    render() {
        const styles = {
            marginTop: 10,
            backgroundColor: 'white',
            height: 10,
            borderRadius: 5,
        };

        return (
            <div className="progress-bar">
                <div>
                    <label className="big-label">#7</label><label className="small-label"> of 10</label>
                </div>
                <LinearProgress style={styles} mode={'determinate'} max={10} min={0} value={7}/>
            </div>
        );
    }
}

export default LinearProgressBar;
