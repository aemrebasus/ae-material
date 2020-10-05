import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeViewComponent } from './ae-view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AeViewModule { }
