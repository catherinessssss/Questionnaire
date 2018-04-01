import * as React from 'react';
import './LinearProgressBar.css';
import { LinearProgressBarProps } from './LinearProgressBarProps';
import { LinearProgressBarState } from './LinearProgressBarState';
import LinearProgress from 'material-ui/LinearProgress';

class LinearProgressBar extends React.Component<LinearProgressBarProps, LinearProgressBarState> {

    constructor(props: LinearProgressBarProps ) {
        super(props);
        // todo delete
        this.state = {
            completed: 1
        };
    }

    render() {
        const styles = {
            marginTop: 5,
            backgroundColor: 'white',
            height: 10,
            borderRadius: 5,
            flex: 1,
        };

        return (
            <div className="progress-bar">
                <div className="progress-number">
                    <label className="big-label">#{this.props.value + 1}</label>
                    <label className="small-label"> of {this.props.max}</label>
                </div>
                <LinearProgress
                    style={styles}
                    mode={'determinate'}
                    max={this.props.max}
                    min={0}
                    value={this.props.value + 1}
                />
            </div>
        );
    }
}

export default LinearProgressBar;
