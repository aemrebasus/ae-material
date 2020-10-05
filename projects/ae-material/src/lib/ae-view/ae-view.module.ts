import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeViewComponent } from './ae-view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AeViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule
  ],
  exports: [
    AeViewComponent
  ]
})
export class AeViewModule { }
