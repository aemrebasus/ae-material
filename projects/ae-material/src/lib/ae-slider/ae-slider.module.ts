import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeSliderComponent } from './ae-slider.component';



@NgModule({
  declarations: [AeSliderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AeSliderComponent
  ]
})
export class AeSliderModule { }
