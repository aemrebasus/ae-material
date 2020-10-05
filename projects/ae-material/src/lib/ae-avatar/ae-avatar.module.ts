import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeAvatarComponent } from './ae-avatar.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [AeAvatarComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [AeAvatarComponent]
})
export class AeAvatarModule { }
