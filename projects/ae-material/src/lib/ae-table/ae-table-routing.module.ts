import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AeTableComponent } from './ae-table.component';

const routes: Routes = [{ path: '', component: AeTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AeTableRoutingModule { }
