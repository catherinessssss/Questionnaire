import * as React from 'react';
import { CardActions } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Accordance3Props } from './Accordance3Props';
import { Accordance3State } from './Accordance3State';
import './Accordance3.css';

class Accordance3 extends React.Component<Accordance3Props, Accordance3State> {
    constructor(props: Accordance3Props ) {
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
                        value="部分一致"
                        label="部分一致"
                        className={'radio-button'}
                    />
                    <RadioButton
                        value="完全不一致"
                        label="完全不一致"
                        className={'radio-button'}
                    />
                </RadioButtonGroup>
            </CardActions>
        );
    }
}

export default Accordance3;
