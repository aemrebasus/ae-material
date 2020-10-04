import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeToolbarComponent } from './ae-toolbar.component';



@NgModule({
  declarations: [AeToolbarComponent],
  imports: [
    CommonModule
  ],
  exports: [AeToolbarComponent]
})
export class AeToolbarModule { }
