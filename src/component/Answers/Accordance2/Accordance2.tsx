import * as React from 'react';
import { CardActions } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Accordance2Props } from './Accordance2Props';
import { Accordance2State } from './Accordance2State';
import './Accordance2.css';

class Accordance3 extends React.Component<Accordance2Props, Accordance2State> {
    constructor(props: Accordance2Props ) {
        super(props);
        this.state = {
            checked: false,
        };
    }

    onUpdateParentState = (event: object, value: string): void => {
        let checked = this.state.checked;

        if (!checked) {
            checked = !checked;

            this.setState({
                checked: true,
            });
        }

        this.props.updateParentState(checked, value);
    }

    render() {
        return (
            <CardActions className={'card-actions'}>
                <RadioButtonGroup name="answer" onChange={this.onUpdateParentState} >
                    <RadioButton
                        value="完全一致"
                        label="完全一致"
                        className={'radio-button'}
                    />
                    <RadioButton
                        value="不一致"
                        label="不一致"
                        className={'radio-button'}
                    />
                </RadioButtonGroup>
            </CardActions>
        );
    }
}

export default Accordance3;
