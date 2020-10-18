import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeSnakeComponent } from './ae-snake.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [AeSnakeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [AeSnakeComponent]
})
export class AeSnakeModule { }
