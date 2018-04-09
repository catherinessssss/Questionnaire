import * as React from 'react';
import './UUID.css';
import { UUIDProps } from './UUIDProps';
import { UUIDState } from './UUIDState';

class UUID extends React.Component<UUIDProps, UUIDState> {

    protected textInput: HTMLInputElement;

    constructor(props: UUIDProps) {
        super(props);
        this.state = {
            copySuccess: '',
        };
    }

    copy = (event: object): void => {
        this.textInput.select();

        document.execCommand('copy');
        this.setState({ copySuccess: '复制成功!' });
    }

    render() {
        let { uuid } = this.props;

        return(
            <div className="uuid">
                <p>请截图此页面并复制唯一识别码提交至平台</p>
                <p id="puuid" onClick={this.copy}>{uuid}</p>
                {
                    document.queryCommandSupported('copy') &&
                    <input
                        type="text"
                        className="uuid-ipt"
                        defaultValue={uuid}
                        ref={(input) => { this.textInput = input!; }}
                    />
                }
                <p>{this.state.copySuccess}</p>
            </div>
        );
    }
}

export default UUID;
