import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NavBar from './component/NavBar/NavBar';
// import LinearProgressBar from './component/LinearProgressBar/LinearProgressBar';
import Card from './component/Card/Card';
// import CircularSubmitButton from './component/CircularSubmitButton/CircluarSubmitButton';
import { MuiThemeProvider } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <MuiThemeProvider>
    <div className="wrapper">
      <NavBar name="问卷调查" showMenuIconButton={false} />
      <div className="content">
        {/* <LinearProgressBar /> */}
        <Card questionNumber={4}/>
        {/* <CircularSubmitButton/> */}
      </div>
      <div className="footer">
        <label htmlFor="">已经是最底啦</label>
      </div>
    </div>
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
