import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeCardComponent } from './ae-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [AeCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [AeCardComponent]
})
export class AeCardModule { }
