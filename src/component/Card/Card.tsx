import * as React from 'react';
import { Card as CardUI, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Accordance3 from '../Answers/Accordance3/Accordance3';
import Question from '../Question/Question';
import './Card.css';
import { CardProps } from './CardProps';
import { CardState } from './CardState';
// import { questionAPI } from '../../api/questionAPI';
// import { uncleanAnswerAPI } from '../../api/uncleanAnswerAPI';
// import { answerAPI } from '../../api/answerAPI';
// import { fakeAnswerAPI } from '../../api/fakeAnswerAPI';
// import Answer from '../../model/Answer';
// import QuestionClass from '../../model/Question';

class Card extends React.Component<CardProps, CardState> {

    constructor(props: CardProps) {
        super(props);
        this.state = {
            checked: false,
            value: '',
            correctStatus: false,
            isFakeAnswer: false,
        };
    }

    onChildChanged = (checked: boolean, value: string): void => {

        let { expectAnswer = '' } = this.props.translatorAnswerItem;
        let correctStatus = this.state.correctStatus;
        let isFakeAnswer = this.state.isFakeAnswer;

        if (expectAnswer === '' || expectAnswer === value) {
            correctStatus = true;
        } else {
            correctStatus = false;
        }

        if (expectAnswer !== '') {
            isFakeAnswer = true;
        }

        this.setState({
            checked: checked,
            value: value,
            correctStatus: correctStatus,
            isFakeAnswer: isFakeAnswer,
        });

        this.props.getUserAnswer(value, isFakeAnswer, correctStatus, checked);
    }

    renderItem(item: any) {
        if (item === null) {
            return;
        } else {
            const titleStyle = {
                background: '#fbfbfb',
                margin: '-16px',
                padding: '16px',
                fontSize: '14',
                color: '#0eb5f8',
                lineHeight: 'normal',
            };

            const containerStyle = {
                marginTop: 16
            };

            return (
                <CardUI containerStyle={containerStyle}>
                    <CardTitle title="Q: 如下粤语与中文意思是否一致?" titleStyle={titleStyle}/>
                    <Question answer={item.context} question={item.root.context}/>
                    <Divider />
                    <Accordance3
                        updateParentState={this.onChildChanged}
                    />
                </CardUI>
            );

        }
    }

    render() {

        const { translatorAnswerItem } = this.props;

        return (
            <div>
                {this.renderItem(translatorAnswerItem)}
            </div>
        );
    }
}

export default Card;
