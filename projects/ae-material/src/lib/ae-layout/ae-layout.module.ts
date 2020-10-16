import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeLayoutComponent } from './ae-layout.component';
import { AeAgencyPageComponent } from './ae-agency-page/ae-agency-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AeLayoutComponent, AeAgencyPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [AeLayoutComponent, AeAgencyPageComponent]
})
export class AeLayoutModule { }
