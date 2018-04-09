import * as React from 'react';
import * as ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import App from './component/App/App';
import './index.css';

ReactDOM.render(
  <App questionNumber={18} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
