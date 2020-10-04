import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeCardComponent } from './ae-card.component';



@NgModule({
  declarations: [AeCardComponent],
  imports: [
    CommonModule
  ],
  exports: [AeCardComponent]
})
export class AeCardModule { }
