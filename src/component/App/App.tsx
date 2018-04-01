import * as React from 'react';
import { AppProps } from './AppProps';
import { AppState } from './AppState';
import NavBar from '../NavBar/NavBar';
import LinearProgressBar from '../LinearProgressBar/LinearProgressBar';
import CircularProgressLoading from '../CircularProgressLoading/CircularProgressLoading';
import Card from '../Card/Card';
import { MuiThemeProvider } from 'material-ui/styles';
// import { questionAPI } from '../../api/questionAPI';
// import { uncleanAnswerAPI } from '../../api/uncleanAnswerAPI';
import { answerAPI } from '../../api/answerAPI';
import { fakeAnswerAPI } from '../../api/fakeAnswerAPI';
// import Answer from '../../model/Answer';
// import FakeAnswer from '../../model/FakeAnswer';
import './App.css';

// const logo = require('./logo.svg');

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      answer: [],
      checkedNumber: 0,
      checkedFakeNumber: 0,
      translatorAnswerItem: null,
      getAnswerYet: false,
      timestamp: new Date().getTime(),
    };
  }

  async componentDidMount() {
    const answers = await answerAPI.getRandomAnswer(this.props.questionNumber);
    const fakeAnswers = await fakeAnswerAPI.getRandomAnswer(this.props.questionNumber);
    const allAnswers = answers.concat(fakeAnswers);

    // ramdom sort the array
    allAnswers.sort(() => { return 0.5 - Math.random(); });
    this.setState({
        answer: allAnswers,
        getAnswerYet: true,
        translatorAnswerItem: allAnswers[this.state.checkedNumber]
    });
  }

  saveUserAnswer = (userAnswer: any) => {
    // todo
    console.log(userAnswer);
  }

  render() {

    const getAnswerYet = this.state.getAnswerYet;

    return (
      <MuiThemeProvider>
          { !getAnswerYet ? (
              <CircularProgressLoading />
          ) : (
            <div className="wrapper">
              <NavBar name="问卷调查" showMenuIconButton={false} />
              <div className="content" key={this.state.timestamp}>
                <LinearProgressBar value={this.state.checkedNumber} max={this.props.questionNumber} />
                <Card translatorAnswerItem={this.state.translatorAnswerItem} getUserAnswer={this.saveUserAnswer}/>
              </div>
            </div>
        )}
      </MuiThemeProvider>
    );
  }
}

export default App;
