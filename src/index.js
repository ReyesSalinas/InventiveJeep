import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Main from './Main'
import Jeep from './Jeep.js';

ReactDOM.render(<Jeep />, document.getElementById('root'));
registerServiceWorker();
