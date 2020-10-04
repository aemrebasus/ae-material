import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeDocComponent } from './ae-doc.component';
import { RouterModule } from '@angular/router';
import { AeAvatarComponent } from '../ae-avatar/ae-avatar.component';
import { AeAvatarModule } from '../ae-avatar/ae-avatar.module';
import { AeCardComponent } from '../ae-card/ae-card.component';
import { AeCardModule } from '../ae-card/ae-card.module';
import { AeFormModule } from '../ae-form/ae-form.module';
import { AeToolbarModule } from '../ae-toolbar/ae-toolbar.module';
import { AeFormComponent } from '../ae-form/ae-form.component';
import { AeToolbarComponent } from '../ae-toolbar/ae-toolbar.component';



@NgModule({
  declarations: [AeDocComponent],
  imports: [
    CommonModule,
    AeAvatarModule,
    AeCardModule,
    AeFormModule,
    AeToolbarModule,
    RouterModule.forChild([
      {
        path: 'ae-material/doc',
        component: AeDocComponent,
        children: [
          { path: 'avatar', component: AeAvatarComponent },
          { path: 'card', component: AeCardComponent },
          { path: 'form', component: AeFormComponent },
          { path: 'toolbar', component: AeToolbarComponent }
        ]
      }
    ])
  ],
  exports: [AeDocComponent]
})
export class AeDocModule { }
