import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeListComponent } from './ae-list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AeListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  exports: [AeListComponent]
})
export class AeListModule { }
