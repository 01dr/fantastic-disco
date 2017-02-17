/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 17.02.17
 */

import React from 'react';
import classNames from 'classnames/bind';
import { formChangeStep } from '../../actions/formActions';
import s from './formProgress.pcss';
import arrow from '../../images/progressArrow.png';

const cx = classNames.bind(s);

const FormProgress = props => (
    <div className={s.progress}>
        <button
            className={ cx({ current: props.step === 1, done: props.step > 1 }) }
            onClick={ () => (props.step > 1 ? props.dispatch(formChangeStep(1)) : null) }
        >Shipping</button>

        <img src={arrow}/>

        <button
            className={ cx({ current: props.step === 2, done: props.step > 2 }) }
            onClick={ () => (props.step > 2 ? props.dispatch(formChangeStep(2)) : null) }
        >Billing</button>

        <img src={arrow}/>

        <button
            className={ cx({ current: props.step === 3 }) }
        >Payment</button>
    </div>
);

export default FormProgress;