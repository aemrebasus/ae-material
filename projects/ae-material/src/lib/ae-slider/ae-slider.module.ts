import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeSliderComponent } from './ae-slider.component';
import { ImgGaleryComponent } from './img-galery/img-galery.component';
import { BackgroundImgDirective } from './background-img.directive';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [AeSliderComponent, ImgGaleryComponent, BackgroundImgDirective],
  imports: [
    CommonModule,
    MatButtonModule,

  ],
  exports: [
    AeSliderComponent,
  ]
})
export class AeSliderModule { }
