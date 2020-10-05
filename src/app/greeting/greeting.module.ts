import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting.component';
import { AeListModule } from 'ae-material';

/**
 * This module will check user sessions and direct users to the right page.
 */
@NgModule({
  declarations: [GreetingComponent],
  imports: [
    CommonModule,
    AeListModule
  ],
  exports: [
    GreetingComponent,
  ],

})
export class GreetingModule { }
