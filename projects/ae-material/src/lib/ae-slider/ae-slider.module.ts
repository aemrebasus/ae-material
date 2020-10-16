import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeSliderComponent } from './ae-slider.component';
import { ImgGaleryComponent } from './img-galery/img-galery.component';
import { BackgroundImgDirective } from './background-img.directive';



@NgModule({
  declarations: [AeSliderComponent, ImgGaleryComponent, BackgroundImgDirective],
  imports: [
    CommonModule
  ],
  exports: [
    AeSliderComponent,
  ]
})
export class AeSliderModule { }
