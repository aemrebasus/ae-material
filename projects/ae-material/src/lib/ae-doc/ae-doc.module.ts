import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeDocComponent } from './ae-doc.component';
import { AeAvatarModule } from '../ae-avatar/ae-avatar.module';
import { AeCardModule } from '../ae-card/ae-card.module';
import { AeFormModule } from '../ae-form/ae-form.module';
import { AeToolbarModule } from '../ae-toolbar/ae-toolbar.module';
import { MatDividerModule } from '@angular/material/divider';
import { AeListModule } from '../ae-list/ae-list.module';
import { AeSideNavModule } from '../ae-side-nav/ae-side-nav.module';
import { AeViewModule } from '../ae-view/ae-view.module';
import { AeTableModule } from '../ae-table/ae-table.module';
import { AeDetailsModule } from '../ae-details/ae-details.module';
import { AeFeatureButtonModule } from '../ae-feature-button/ae-feature-button.module';
import { AeNavbarMenuModule } from '../ae-navbar-menu/ae-navbar-menu.module';
import { AeMessageModule } from '../ae-message/ae-message.module';
import { AeVideoComponent } from '../ae-video/ae-video.component';
import { AeVideoModule } from '../ae-video/ae-video.module';
import { AeSliderModule } from '../ae-slider/ae-slider.module';
import { AeTypingModule } from '../ae-typing/ae-typing.module';


@NgModule({
  declarations: [AeDocComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    AeAvatarModule,
    AeCardModule,
    AeFormModule,
    AeToolbarModule,
    AeListModule,
    AeSideNavModule,
    AeViewModule,
    AeTableModule,
    AeDetailsModule,
    AeFeatureButtonModule,
    AeNavbarMenuModule,
    AeMessageModule,
    AeVideoModule,
    AeSliderModule,
    AeTypingModule,
  ],
  exports: [
    AeDocComponent,
    AeAvatarModule,
    AeCardModule,
    AeFormModule,
    AeToolbarModule,
    AeListModule,
    AeSideNavModule,
    AeViewModule,
    AeTableModule,
    AeDetailsModule,
    AeFeatureButtonModule,
    AeNavbarMenuModule,
    AeMessageModule,
    AeVideoComponent,
    AeSliderModule,
    AeTypingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AeDocModule { }
