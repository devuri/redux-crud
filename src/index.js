import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import photoLoaderMiddleware from './middleware/photo-loader';
import ProductList from './containers/product-list';
import ProductDetails from './containers/product-details';
import reducers from './reducers/index';

import './styles.css';

const store = window.reduxStore = createStore(
    reducers,
    compose(
        applyMiddleware(
            photoLoaderMiddleware,
            thunk,
            routerMiddleware(browserHistory),
        ),
        window.devToolsExtension && window.devToolsExtension(),
    ),
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={ProductList}>
                <Route path="/:id" component={ProductDetails} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
