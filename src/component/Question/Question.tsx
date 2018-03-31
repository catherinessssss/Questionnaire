import * as React from 'react';
import { List, ListItem } from 'material-ui/List';
import { CardText } from 'material-ui/Card';
import { QuestionProps } from './QuestionProps';
import './Question.css';

const zh = require('../../images/zh.svg');
const yue = require('../../images/yue.svg');

const ZhIcon = () => (
    <img src={zh} alt="zh-icon" className={'icon'} />
);

const YueIcon = () => (
    <img src={yue} alt="yue-icon" className={'icon'} />
);

const listStyle = {
    padding: '0',
};

const listItem = {
    lineHeight: 'normal',
    paddingLeft: '32px',
};

class Question extends React.Component<QuestionProps, object> {
    constructor(props: QuestionProps ) {
        super(props);
    }

    render() {
        return (
            <CardText>
                <List style={listStyle}>
                    <ListItem
                        style={listItem}
                        disabled={true}
                        primaryText={this.props.question}
                        leftIcon={<YueIcon />}
                    />
                    <ListItem
                        style={listItem}
                        disabled={true}
                        primaryText={this.props.answer}
                        leftIcon={<ZhIcon />}
                    />
                </List>
            </CardText>
        );
    }
}

export default Question;
