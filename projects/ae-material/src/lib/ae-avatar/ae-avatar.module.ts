import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeAvatarComponent } from './ae-avatar.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [AeAvatarComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [AeAvatarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AeAvatarModule { }
