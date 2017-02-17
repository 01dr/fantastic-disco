/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 17.02.17
 */

import { FORM_CHANGE_STEP, FORM_NEXT_STEP } from './constants';

export function formChangeStep(step) {
    return { type: FORM_CHANGE_STEP, step }
}

export function formNextStep() {
    return { type: FORM_NEXT_STEP }
}