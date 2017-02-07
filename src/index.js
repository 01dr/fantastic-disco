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
        <div>React {process.env.NODE_ENV === 'development' ? <span>development</span> : <span>production</span>} mode</div>
    </Provider>,
    document.getElementById('root')
);