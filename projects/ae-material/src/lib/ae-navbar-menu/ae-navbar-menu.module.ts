import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { AeNavbarMenuComponent } from './ae-navbar-menu.component';
import { AeNavbarMenuItemComponent } from './ae-navbar-menu-item/ae-navbar-menu-item.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [AeNavbarMenuComponent, AeNavbarMenuItemComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    AeNavbarMenuComponent,
    AeNavbarMenuItemComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AeNavbarMenuModule { }
