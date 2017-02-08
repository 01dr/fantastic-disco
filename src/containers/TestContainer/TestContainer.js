/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 08.02.17
 */

import React, { Component } from 'react';

import '../common/global.pcss';
import s from './testContainer.pcss';

import TestContainer2 from '../TestContainer2/TestContainer2';

export default class TestContainer extends Component {
    render() {
        return (
            <div className={ s.test }>Hello, postcss! <TestContainer2/></div>
        )
    }
}