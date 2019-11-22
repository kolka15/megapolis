import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import './assets/styles/normalize.scss';
import './assets/styles/fonts.scss';
import './assets/styles/helpers.scss';
import './assets/styles/bootstrap-custom.scss';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {store} from './redux/store';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();


/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {store, persistor} from "./redux/store"

import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {PersistGate} from "redux-persist/integration/react"

import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
*/
