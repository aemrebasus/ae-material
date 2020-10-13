import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeButtonComponent } from './ae-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';



@NgModule({
  declarations: [AeButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [AeButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AeButtonModule { }
