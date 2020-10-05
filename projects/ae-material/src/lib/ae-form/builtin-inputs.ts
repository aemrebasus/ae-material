import { validators } from './builtin-validators';
import { FormField } from './FormField';

const firstName = new FormField(
    '', [
    validators.range(3, 25),
    validators.required
], 'firstName', 'text', 'name', 'First Name', 'First Name', 'person');

const lastName = new FormField(
    '', [
    validators.range(3, 25),
    validators.required
], 'lastName', 'text', 'family-name', 'Last Name', 'Last Name', 'person');

const email = new FormField(
    '', [
    validators.email,
    validators.required,
], 'email', 'email', 'email', 'Email', 'Email', 'email');

const passwordCurrent = new FormField(
    '', [
    validators.password
], 'passwordCurrent', 'password', 'current-password', 'password', 'password', 'security');

const passwordNew = new FormField(
    '', [
    validators.password
], 'passwordNew', 'password', 'new-password', 'Password', 'Password', 'security');


const dateOfBirth = new FormField(
    '', [
    validators.beforeToday
], 'dateOfBirth', 'date', 'bday', 'Birthday', 'Birthday', 'brightness_high'
);




export const inputs = {
    firstName,
    lastName,
    email,
    passwordCurrent,
    passwordNew,
    dateOfBirth,
};
