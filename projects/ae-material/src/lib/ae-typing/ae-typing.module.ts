import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeTypingComponent } from './ae-typing.component';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [AeTypingComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [
    AeTypingComponent
  ]
})
export class AeTypingModule { }
