import { NgModule } from '@angular/core';
import { AeAvatarModule } from './ae-avatar/ae-avatar.module';
import { AeCardModule } from './ae-card/ae-card.module';
import { AeDetailsModule } from './ae-details/ae-details.module';
import { AeDocModule } from './ae-doc/ae-doc.module';
import { AeFormModule } from './ae-form/ae-form.module';
import { AeListModule } from './ae-list/ae-list.module';
import { AeSideNavModule } from './ae-side-nav/ae-side-nav.module';
import { AeTableModule } from './ae-table/ae-table.module';
import { AeToolbarModule } from './ae-toolbar/ae-toolbar.module';
import { AeViewModule } from './ae-view/ae-view.module';

@NgModule({
    declarations: [],
    imports: [
        AeAvatarModule,
        AeCardModule,
        AeDetailsModule,
        AeDocModule,
        AeFormModule,
        AeListModule,
        AeSideNavModule,
        AeTableModule,
        AeToolbarModule,
        AeViewModule,
        AeDocModule
    ],
    exports: [
        AeAvatarModule,
        AeCardModule,
        AeDetailsModule,
        AeDocModule,
        AeFormModule,
        AeListModule,
        AeSideNavModule,
        AeTableModule,
        AeToolbarModule,
        AeViewModule,
        AeDocModule,
    ],

})
export class AeMaterialModule { }
