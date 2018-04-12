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
        let textInput = this.textInput;

        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            let ediable = textInput.contentEditable;
            let readOnly = textInput.readOnly;
            textInput.contentEditable = 'true';
            textInput.readOnly = false;

            let range = document.createRange();
            range.selectNodeContents(textInput);

            let select = window.getSelection();
            select.removeAllRanges();
            select.addRange(range);
            textInput.setSelectionRange(0, 999999);

            textInput.contentEditable = ediable;
            textInput.readOnly = readOnly;
        } else {
            textInput.select();
        }

        document.execCommand('copy');
        textInput.blur();
        this.setState({ copySuccess: '复制成功!' });
    }

    render() {
        let { uuid } = this.props;

        return(
            <div className="uuid">
                <p>请截图此页面并复制唯一识别码提交至平台</p>
                <input
                    className="uuid-ipt"
                    readOnly={true}
                    onClick={this.copy}
                    value={uuid}
                    ref={(input) => { this.textInput = input!; }}
                />
                <p>{this.state.copySuccess}</p>
            </div>
        );
    }
}

export default UUID;
