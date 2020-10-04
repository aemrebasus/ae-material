import { createReducer, on } from '@ngrx/store'
import { actions } from './actions';
import { handlers } from './handlers';

const sampleReducer = createReducer(
    {
        name: 'Ahmet Emrebas'
    },
    on(actions.sampleAction, handlers.handlerOne)
);


export const reducers = {};