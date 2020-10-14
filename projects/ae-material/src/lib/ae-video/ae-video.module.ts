import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeVideoComponent } from './ae-video.component';



@NgModule({
  declarations: [AeVideoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AeVideoComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AeVideoModule { }
