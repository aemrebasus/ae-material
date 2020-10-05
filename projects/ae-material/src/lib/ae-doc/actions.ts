import { createAction, createReducer, on, props } from '@ngrx/store';
import { AeView } from '../ae-view/ae-view.component';
import { components } from '../resolve/components';

export const setView = createAction('Set Current View', props<AeView>());

export const reducer = createReducer(
    null,
    on(setView, (state, param) => {
        return param;
    })
);

