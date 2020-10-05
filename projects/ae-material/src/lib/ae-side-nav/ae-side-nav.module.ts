import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeSideNavComponent } from './ae-side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AeListModule } from '../ae-list/ae-list.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AeToolbarModule } from '../ae-toolbar/ae-toolbar.module';



@NgModule({
  declarations: [AeSideNavComponent],
  imports: [
    CommonModule,
    AeToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    AeListModule,
  ],
  exports: [
    AeSideNavComponent
  ]
})
export class AeSideNavModule { }
