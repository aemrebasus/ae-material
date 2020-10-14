import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeVideoComponent } from './ae-video.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AeToolbarModule } from '../ae-toolbar/ae-toolbar.module';



@NgModule({
  declarations: [AeVideoComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    AeToolbarModule,
  ],
  exports: [
    AeVideoComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AeVideoModule { }
