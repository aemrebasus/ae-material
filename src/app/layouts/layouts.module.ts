import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebLayoutComponent } from './web-layout/web-layout.component';
import { MobileLayoutComponent } from './mobile-layout/mobile-layout.component';
import { TabletLayoutComponent } from './tablet-layout/tablet-layout.component';



@NgModule({
  declarations: [WebLayoutComponent, MobileLayoutComponent, TabletLayoutComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
