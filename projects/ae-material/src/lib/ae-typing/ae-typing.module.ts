import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeTypingComponent } from './ae-typing.component';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [AeTypingComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    AeTypingComponent
  ]
})
export class AeTypingModule { }
