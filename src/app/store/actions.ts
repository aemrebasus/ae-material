import { ActionType, createAction, props } from '@ngrx/store'

const sampleAction = createAction('[Action C] Describe', props<{ props: any }>());


export const actions = {
    sampleAction
}
