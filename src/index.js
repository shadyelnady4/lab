import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider, ReactReduxContext  } from 'react-redux';

import ConfigStore from './Redux/Store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';


const Store =ConfigStore()

const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={Store} context={ReactReduxContext}>
        <App history={history} context={ReactReduxContext} />
    </Provider>,
    document.getElementById('root')
);

module.hot.accept();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
