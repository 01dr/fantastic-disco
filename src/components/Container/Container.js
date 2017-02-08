/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 08.02.17
 */

import React from 'react';
import s from './container.pcss';

const Container = props => (
    <div className={s.container}>{props.children}</div>
);

export default Container;