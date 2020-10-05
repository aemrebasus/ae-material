import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FormMeta } from './FormMeta';
import { FormField, Link, Response, SubmitFunction } from './FormField';
import { Subscription } from 'rxjs';
import { inputs as BUILT_IN_INPUTS } from './builtin-inputs';

const sampleForm: FormMeta = {
  formFields: [
    BUILT_IN_INPUTS.firstName,
    BUILT_IN_INPUTS.lastName,
    BUILT_IN_INPUTS.passwordCurrent,
    BUILT_IN_INPUTS.passwordNew,
    BUILT_IN_INPUTS.dateOfBirth,
  ],
  onSubmit: (f) => {
    alert('Submitting form!');
    console.log(f.value);
  },
  links: [
    { path: '/ae-material/doc/form', value: 'Action 1' },
    { path: '/ae-material/doc/form', value: 'Action 2' }
  ],
  submitLabel: 'Submit Label',
  title: 'Sample Form',
};

// tslint:disable-next-line: no-empty-interface
export interface AeForm extends FormMeta {

}

@Component({
  selector: 'ae-form',
  templateUrl: './ae-form.component.html',
  styleUrls: ['./ae-form.component.css']
})
export class AeFormComponent implements OnInit, OnDestroy {

  formDataSub: Subscription;

  @Input() input: AeForm = sampleForm;

  form: FormGroup;
  fields: FormField[];
  formOnSubmit: SubmitFunction;
  links: Link[];
  urls: string[];
  title: string;
  submitLabel = 'Send';

  response: Response;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.urls = this.router.url.split('/');
    this.formDataSub = this.activatedRoute.data.pipe(map(d => d.resolved)).subscribe((formMeta: FormMeta) => {

      if (formMeta) {
        this.initComponentFields(formMeta);
        this.configureInputViews();
        this.initFormGroup(formMeta.formFields);
      } else {
        this.initComponentFields(this.input);
        this.configureInputViews();
        this.initFormGroup(this.input.formFields);

      }
    });
  }
  ngOnDestroy(): void {
    this.formDataSub.unsubscribe();
  }

  initComponentFields(formMeta: FormMeta): void {
    this.title = formMeta.title;
    this.submitLabel = formMeta.submitLabel;
    this.fields = formMeta.formFields;
    this.links = formMeta.links;
    this.formOnSubmit = formMeta.onSubmit;
  }

  initFormGroup(formField: FormField[]): void {
    this.form = new FormGroup(
      formField.map(f => ({ [f.controlName]: new FormControl(f.value || '', f.validators) })).reduce((p, e) => ({ ...p, ...e }))
    );
  }


  configureInputViews(): void {
    this.fields.forEach(f => {
      switch (f.type) {
        case 'color': case 'email': case 'file': case 'image': case 'number': case 'password': case 'tel': case 'text': case 'url': {
          f.viewType = 'text';
          break;
        }
        case 'date': case 'datetime-local': case 'month': case 'time': case 'week': {
          f.viewType = 'date';
          break;
        }
        case 'select': case 'radio': {
          f.viewType = 'select';
          break;
        }
        case 'range':
        case 'checkbox':
        case 'select-many':
        case 'select-users':
        case 'text-area': {
          f.viewType = f.type;
          break;
        }
        default: {
          f.viewType = 'text';
        }
      }
    });

  }


  getErrors(controlName: string): string[] {
    return Object.values(this.form.controls[controlName].errors);
  }

  getControl(controlName: string): AbstractControl {
    return this.form.controls[controlName];
  }

  isInvalid(controlName: string): boolean {
    const control = this.getControl(controlName);
    return control.dirty && control.touched && control.invalid;
  }

  onSubmit(): void {
    //  TODO : Add confirmation before submissio if required
    this.formOnSubmit(this.form);
    this.resetForm();
  }

  resetForm(): void {
    Object.values(this.form.controls).forEach(c => {
      c.setValue('');
      c.markAsUntouched();
    });
  }

  goBack(): void {
    this.router.navigate(this.urls.slice(0, this.urls.length - 2));
  }

}
