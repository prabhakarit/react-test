import * as ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react';

    ReactDOM.render(<App />, document.getElementById('root'));
    serviceWorker.unregister();