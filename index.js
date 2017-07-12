import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import tables from './reducers';
import Casino from './components/Casino';

const store = createStore(tables, applyMiddleware(thunkMiddleware));
ReactDOM.render(
    <Provider store={store}>
        <Casino/>
    </Provider>,
    document.getElementById('root')
);