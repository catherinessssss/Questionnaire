import * as React from 'react';
import { Card as CardUI, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Accordance3 from '../Answers/Accordance3/Accordance3';
import Question from '../Question/Question';
import './Card.css';
import { CardProp } from './CardProp';
import { CardState } from './CardState';
import { questionAPI } from '../../api/questionAPI';
import { uncleanAnswerAPI } from '../../api/uncleanAnswerAPI';
import { answerAPI } from '../../api/answerAPI';
import { fakeAnswerAPI } from '../../api/fakeAnswerAPI';
import { Answer } from '../../model/Answer';
import { FakeAnswer } from '../../model/FakeAnswer';

class Card extends React.Component<CardProp, CardState> {

    constructor(props: CardProp) {
        super(props);
        this.state = {
            question: [],
            answer: [],
            checkedNumber: 0,
            checkedFakeNumber: 0,
        };
    }

    onChildChanged = (checkedNumber: number, checkedFakeNumber: number): void => {
        this.setState({
            checkedNumber: checkedNumber,
            checkedFakeNumber : checkedFakeNumber,
        });
        // console.log(this.state.checkedNumber);
    }

    renderList(list: any, questionNumber: number) {
        return list.map((item: Answer|FakeAnswer, index: number) => this.renderItem(item, index));
    }

    renderItem(item: Answer|FakeAnswer, index: number) {
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

        let { expectAnswer = '' } = item;
        // if (!!item) { // fake answer
            // expectAnswer = item.context;
            // answer = item.super.context;
        // }

        return (
            <CardUI containerStyle={containerStyle} key={index}>
                <CardTitle title="Q: 如下粤语与中文意思是否一致1?" titleStyle={titleStyle}/>
                <Question answer={item.context} question={item.root.context}/>
                <Divider />
                <Accordance3
                    updateParentState={this.onChildChanged}
                    checkedNumber={this.state.checkedNumber}
                    checkedFakeNumber={this.state.checkedFakeNumber}
                    expectAnswer={expectAnswer}
                />
            </CardUI>
        );
    }

    async componentDidMount() {
        const questions = await questionAPI.getAllQuestions();
        const answers = await answerAPI.getRandomAnswer(this.props.questionNumber);
        const fakeAnswers = await fakeAnswerAPI.getRandomAnswer(this.props.questionNumber);
        const allAnswers = answers.concat(fakeAnswers);

        // ramdom sort the array
        allAnswers.sort(() => { return 0.5 - Math.random(); });
        this.setState({
            question: questions,
            answer: allAnswers,
        });

        // const testdata = await uncleanAnswerAPI.saveAnswer(null);
        // console.log(testdata);
    }

    render() {

        const { questionNumber = 10 } = this.props;

        return (
            <div>
                {this.renderList(this.state.answer, questionNumber)}
            </div>
        );
    }
}

export default Card;
