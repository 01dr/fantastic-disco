/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 06.02.17
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <div>react!</div>
    </Provider>,
    document.getElementById('root')
);