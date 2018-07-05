import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.styl';
import App from './components/App';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
