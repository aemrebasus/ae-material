import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AeAvatarModule } from './ae-avatar/ae-avatar.module';
import { AeCardModule } from './ae-card/ae-card.module';
import { AeDocModule } from './ae-doc/ae-doc.module';
import { AeFormModule } from './ae-form/ae-form.module';
import { AeToolbarModule } from './ae-toolbar/ae-toolbar.module';


@NgModule({
  declarations: [],
  imports: [
    AeAvatarModule,
    AeCardModule,
    AeFormModule,
    AeToolbarModule,
    AeDocModule
  ],
  exports: [
    AeAvatarModule,
    AeCardModule,
    AeFormModule,
    AeToolbarModule,
    AeDocModule
  ]
})
export class AeMaterialModule { }
