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