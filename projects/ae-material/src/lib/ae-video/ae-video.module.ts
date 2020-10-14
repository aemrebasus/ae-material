import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeVideoComponent } from './ae-video.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AeToolbarModule } from '../ae-toolbar/ae-toolbar.module';
import { ToPercentPipe } from './to-percent.pipe';
import { AeListModule } from '../ae-list/ae-list.module';


@NgModule({
  declarations: [AeVideoComponent, ToPercentPipe],
  imports: [
    CommonModule,
    AeToolbarModule,
    AeListModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    AeVideoComponent, ToPercentPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AeVideoModule { }
