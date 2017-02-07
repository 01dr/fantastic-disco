/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 08.02.17
 */

import React, { Component } from 'react';
import s from './testContainer.pcss';

export default class TestContainer extends Component {
    render() {
        return (
            <div className={ s.test }>Hello, postcss!</div>
        )
    }
}