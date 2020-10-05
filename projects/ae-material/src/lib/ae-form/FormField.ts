import { FormGroup, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { IconType } from '../common/IconType';
import { AutoComplete } from './auto-complete';
import { InputType } from './input-type';


export type OptionType = {
    key: string;
    value: string;
    icon?: IconType;
}[];

export type SubmitFunction = (form: FormGroup) => void;
export type Link = { value: string, path: string };
export type Response = { status: boolean, msg: string };




/**
 * @field controlName?: string,
 * @field type?: InputType,
 * @field autocomplete?: AutoComplete,
 * @field placeholder?: string,
 * @field label?: string,
 * @field icon?: IconType,
 * @field options?: OptionType,
 * @field validators?: ValidatorFn[],
 * @field max?: number,
 * @field min?: number,
 * @field value?: string
 */
export class FormField {
    viewType?: 'text' | 'date' | 'select' | 'range' | 'checkbox' | 'radio' | 'switch' | 'select-many' | 'select-users' | 'text-area';
    constructor(
        public value?: string | (string | number)[] | number | boolean,
        public validators?: ValidatorFn[],
        public controlName?: string,
        public type?: InputType,
        public autocomplete?: AutoComplete,
        public placeholder?: string,
        public label?: string,
        public icon?: IconType,
        public options?: OptionType | Observable<OptionType>,
        public max?: number,
        public min?: number,
    ) { }
}
