/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 17.02.17
 */

import { FORM_CHANGE_STEP, FORM_NEXT_STEP } from '../actions/constants';

const step = (state = 1, action) => {
    switch (action.type) {
    case FORM_CHANGE_STEP:
        return action.step;
    case FORM_NEXT_STEP:
        return state + 1;
    default:
        return state;
    }
}

const form = (state = {}) => state;

export default { form, step };