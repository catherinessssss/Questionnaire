import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NavBar from './component/NavBar/NavBar';
import { MuiThemeProvider } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <MuiThemeProvider>
    <NavBar name="问卷调查" showMenuIconButton={false} />
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
