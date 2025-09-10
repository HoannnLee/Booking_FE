import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './styles/styles.scss';

import App from './containers/App.jsx';
import * as serviceWorker from './serviceWorker';
import IntlProviderWrapper from './hoc/IntlProviderWrapper';

import { history } from './redux';
import { Provider } from 'react-redux';
import reduxStore, { persistor } from './redux.js';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

import Modal from 'react-modal';

Modal.setAppElement("#root");
// If you want your a
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <HistoryRouter history={history}>
        <Provider store={reduxStore}>
            <IntlProviderWrapper>
                <App persistor={persistor} />
            </IntlProviderWrapper>
        </Provider>
    </HistoryRouter>,
);

// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
