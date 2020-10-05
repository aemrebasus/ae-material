import { FormField, Link } from './FormField';

/**
 * @field onSubmit: (form: T) => void,
 * @field formFields: FormField[],
 * @field title?: string,
 * @field submitLabel?: string,
 * @field links?: Link[],
 */
export class FormMeta<T = any> {
    constructor(
        public onSubmit: (form: T) => void,
        public formFields: FormField[],
        public title?: string,
        public submitLabel?: string,
        public links?: Link[],
    ) { }
}
