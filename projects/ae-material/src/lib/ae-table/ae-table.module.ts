import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AeTableRoutingModule } from './ae-table-routing.module';
import { AeTableComponent } from './ae-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [AeTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AeTableRoutingModule,
  ],
  exports: [AeTableComponent]
})
export class AeTableModule { }
