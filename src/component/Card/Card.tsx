import * as React from 'react';
import { Card as CardUI, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Accordance3 from '../Answers/Accordance3/Accordance3';
import Question from '../Question/Question';
import './Card.css';
import { CardProp } from './CardProp';
import { CardState } from './CardState';
// import { questionAPI } from '../../api/questionAPI';
// import { uncleanAnswerAPI } from '../../api/uncleanAnswerAPI';
// import { answerAPI } from '../../api/answerAPI';
// import { fakeAnswerAPI } from '../../api/fakeAnswerAPI';
import Answer from '../../model/Answer';
import QuestionClass from '../../model/Question';

class Card extends React.Component<CardProp, CardState> {

    constructor(props: CardProp) {
        super(props);
        this.state = {
            question: [],
            answer: [],
            checkedNumber: 0,
            value: '',
        };
    }

    onChildChanged = (checkedNumber: number, value: string): void => {
        this.setState({
            checkedNumber: checkedNumber,
            value: value,
        });
        const question = new QuestionClass({theContext: '123'});
        const testAnswer = new Answer({
            theContext: 'Hi',
            theStep: 2,
            theRoot: question,
            theSuper: null,
            theAuthor: 'sss',
        });

        this.props.getUserAnswer(testAnswer);
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

            // let { expectAnswer = '' } = item;

            return (
                <CardUI containerStyle={containerStyle}>
                    <CardTitle title="Q: 如下粤语与中文意思是否一致?" titleStyle={titleStyle}/>
                    <Question answer={item.context} question={item.root.context}/>
                    <Divider />
                    <Accordance3
                        updateParentState={this.onChildChanged}
                        checkedNumber={this.state.checkedNumber}
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
