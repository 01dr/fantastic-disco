/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 07.02.17
 */

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from '../devTools';

import TestContainer from '../TestContainer/TestContainer';

export default class Root extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <div>React develop mode</div>
                    <TestContainer/>
                    <DevTools />
                </div>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};