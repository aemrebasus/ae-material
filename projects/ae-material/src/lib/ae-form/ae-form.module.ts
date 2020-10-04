import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeFormComponent } from './ae-form.component';



@NgModule({
  declarations: [AeFormComponent],
  imports: [
    CommonModule
  ],
  exports: [AeFormComponent]
})
export class AeFormModule { }
