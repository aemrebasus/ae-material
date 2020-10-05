import { ValidatorFn } from '@angular/forms';
import validator from 'validator';

type ValidatorFnParam = (min?: number, max?: number) => ValidatorFn;


const required: ValidatorFn = (c) => validator.isEmpty(c.value) ?
    { required: 'Field is required.' } :
    null;

const minLength: ValidatorFnParam =
    (min: number) => (c) => validator.isLength(c.value, { min }) ? null :
        { minLength: `Field must contain at least ${min} characters` };

const maxLength: ValidatorFnParam =
    (max) => (c) => validator.isLength(c.value, { max }) ? null :
        { maxLength: `Field must contain at most ${max} characters.` };

const range: ValidatorFnParam = (min: number, max: number) => (c) => validator.isLength(c.value, { max, min }) ? null :
    { range: `Field must contain charachters between ${min} and ${max} ` };

const email: ValidatorFn = (c) => validator.isEmail(c.value) ? null :
    { email: 'Field must be email!' };

const password: ValidatorFn = (c) => validator.isLength(c.value, { max: 255, min: 8 }) ? null :
    { password: 'Password must be at least 8 chracters long' };

const beforeToday: ValidatorFn = (c) => Date.parse(c.value) < Date.now() ? null :
    { beforeToday: 'Date must be before the today\'s date' };

const afterToday: ValidatorFn = (c) => Date.parse(c.value) > Date.now() ? null :
    { beforeToday: 'Date must be before the today\'s date' };

// TODO: Add custom validations here.

export const validators = {
    minLength,
    maxLength,
    range,
    email,
    password,
    required,
    beforeToday,
    afterToday
};

