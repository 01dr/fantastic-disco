/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 08.02.17
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formNextStep } from '../../actions/formActions';
import s from './form.pcss';

import FormProgress from '../../components/FormProgress/FormProgress';

class Form extends Component {
    render() {
        const { dispatch, step } = this.props;

        return (
            <div className={s.form}>
                <FormProgress step={step} dispatch={dispatch}/>

                <div className={s.content}>
                    <div>Billing information</div>
                    <button onClick={ () => dispatch(formNextStep()) }>next</button>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    step: state.step
}))(Form);