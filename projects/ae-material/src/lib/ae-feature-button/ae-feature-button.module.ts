import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeFeatureButtonComponent } from './ae-feature-button.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AeRotateDirective } from './rotate.directive';



@NgModule({
  declarations: [AeFeatureButtonComponent, AeRotateDirective],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    AeFeatureButtonComponent,
    AeRotateDirective,
  ]
})
export class AeFeatureButtonModule { }
