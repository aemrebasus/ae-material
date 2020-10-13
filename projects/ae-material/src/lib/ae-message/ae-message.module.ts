import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeMessageComponent } from './ae-message.component';
import { AeAvatarModule } from '../ae-avatar/ae-avatar.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AeButtonModule } from '../ae-button/ae-button.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AeToolbarModule } from '../ae-toolbar/ae-toolbar.module';
import { MatBadgeModule } from '@angular/material/badge';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollToDirective } from './scroll-to.directive';



@NgModule({
  declarations: [AeMessageComponent, ScrollToDirective],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    AeButtonModule,
    AeAvatarModule,
    AeToolbarModule
  ],
  exports: [
    AeMessageComponent, ScrollToDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AeMessageModule { }
