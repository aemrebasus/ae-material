import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, PercentPipe } from '@angular/common';
import { AeVideoComponent } from './ae-video.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AeToolbarModule } from '../ae-toolbar/ae-toolbar.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElementWithDirective } from './element-width.directive';


@NgModule({
  declarations: [AeVideoComponent, ElementWithDirective, PercentPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    AeToolbarModule,
    MatProgressBarModule,
    MatSliderModule
  ],
  exports: [
    AeVideoComponent, ElementWithDirective, PercentPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AeVideoModule { }
