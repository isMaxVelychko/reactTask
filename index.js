import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tables from './reducers';
import Casino from './components/Casino';

console.log('test');
console.log('test2');

const store = createStore(tables);
ReactDOM.render(
    <Provider store={store}>
        <Casino/>
    </Provider>,
    document.getElementById('root')
);