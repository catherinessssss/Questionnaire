import * as React from 'react';
import { AppProps } from './AppProps';
import { AppState } from './AppState';
import NavBar from '../NavBar/NavBar';
import LinearProgressBar from '../LinearProgressBar/LinearProgressBar';
import CircularProgressLoading from '../CircularProgressLoading/CircularProgressLoading';
import Card from '../Card/Card';
import SuccessPage from '../SuccessPage/SuccessPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import { MuiThemeProvider } from 'material-ui/styles';
import { answerAPI } from '../../api/answerAPI';
import { fakeAnswerAPI } from '../../api/fakeAnswerAPI';
import { uncleanAnswerAPI } from '../../api/uncleanAnswerAPI';
import Answer from '../../model/Answer';
import UncleanAnswer from '../../model/UncleanAnswer';
import './App.css';

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      answers: [],
      translatorAnswerItem: null,
      checkedNumber: 0,
      checkedFakeNumber: 0,
      getAnswerYet: false,
      timestamp: new Date().getTime(),
      failed: false,
      value: '',
      correctStatus: false,
      checked: false,
      isFakeAnswer: false,
      userAnswers: [],
    };
  }

  async componentDidMount() {
    const answers = await answerAPI.getRandomAnswer(this.props.questionNumber);
    const fakeAnswers = await fakeAnswerAPI.getRandomAnswer(this.props.questionNumber);
    const allAnswers = answers.concat(fakeAnswers);

    // ramdom sort the array
    allAnswers.sort(() => { return 0.5 - Math.random(); });
    this.setState({
        answers: allAnswers,
        getAnswerYet: true,
        translatorAnswerItem: allAnswers[this.state.checkedNumber]
    });
  }

  /**
   * @param value user answer
   * @param correctStatus check answer is correct or not
   * @param checkedNumber check how many questions has been answered
   */
  getUserAnswer = (value: string, isFakeAnswer: boolean, correctStatus: boolean, checked: boolean) => {
    // do some operation when it has been selected.
    if (!!checked) {
      this.setState({
        checked: true,
        value: value,
        correctStatus: correctStatus,
        isFakeAnswer: isFakeAnswer,
      });
    }
  }

  submitAnswer = async () => {

    if (this.state.checked) {
      let checkedFakeNumber = this.state.checkedFakeNumber;
      let failed = this.state.failed;
      // check correct status
      if (!this.state.correctStatus) {
        checkedFakeNumber += 1;
      }

      if (checkedFakeNumber >= 2) {
        failed = true;
      }

      let parentAnswer = this.state.answers[this.state.checkedNumber];
      let checkedNumber = this.state.checkedNumber + 1;

      // Assembled answer
      let answer = new Answer({
        theContext: this.state.value,
        theStep: 2,
        theRoot: parentAnswer.root,
        theSuper: parentAnswer,
        theAuthor: 'user',
      });

      let userAnswers: Array<UncleanAnswer> = this.state.userAnswers;
      if (!this.state.isFakeAnswer) {
        userAnswers = userAnswers.concat(answer);
      }

      this.setState({
        failed: failed,
        checkedFakeNumber: checkedFakeNumber,
        userAnswers: userAnswers,
        checked: false,
        checkedNumber: checkedNumber,
        timestamp: new Date().getTime(),
        translatorAnswerItem : this.state.answers[checkedNumber],
      });

      if (!failed && checkedNumber === this.state.answers.length) {
        await uncleanAnswerAPI.saveAnswer(userAnswers);
      }
    } else {
      // todo alert ui
      alert('请先选择一个答案！');
    }
  }

  render() {

    const getAnswerYet = this.state.getAnswerYet;
    const answerLength = this.state.answers.length;

    if (!this.state.failed && answerLength !== 0 && this.state.checkedNumber === answerLength ) {
      return (
        <MuiThemeProvider>
          <SuccessPage />
        </MuiThemeProvider>
      );
    } else if (this.state.failed) {
      return (
        <MuiThemeProvider>
          <ErrorPage/>
        </MuiThemeProvider>
      );
    } else {
      return (
        <MuiThemeProvider>
            { !getAnswerYet
              ? (<CircularProgressLoading />)
              : (
                <div className="wrapper" key={this.state.timestamp}>
                  <NavBar name="问卷调查" showMenuIconButton={false} updateParentState={this.submitAnswer}/>
                  <div className="content" key={this.state.timestamp}>
                    <LinearProgressBar value={this.state.checkedNumber} max={this.props.questionNumber} />
                    <Card translatorAnswerItem={this.state.translatorAnswerItem} getUserAnswer={this.getUserAnswer}/>
                  </div>
                </div>
              )
            }
        </MuiThemeProvider>
      );
    }
  }
}

export default App;
