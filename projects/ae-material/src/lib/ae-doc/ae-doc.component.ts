import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AeAvatarComponent } from '../ae-avatar/ae-avatar.component';
import { AeCardComponent } from '../ae-card/ae-card.component';
import { AeDetailsComponent } from '../ae-details/ae-details.component';
import { AeFeatureButtonComponent } from '../ae-feature-button/ae-feature-button.component';
import { AeFormComponent } from '../ae-form/ae-form.component';
import { AeListComponent } from '../ae-list/ae-list.component';
import { AeSideNav, AeSideNavComponent } from '../ae-side-nav/ae-side-nav.component';
import { AeTableComponent } from '../ae-table/ae-table.component';
import { AeToolbarComponent } from '../ae-toolbar/ae-toolbar.component';
import { AeView } from '../ae-view/ae-view.component';
import { components } from '../meta/components';

export interface AeDocComponent {
  thereIsNothingHere: string;
}

@Component({
  selector: 'ae-doc',
  templateUrl: './ae-doc.component.html',
  styleUrls: ['./ae-doc.component.css']
})
export class AeDocComponent {

  component: any;

  @Input() sideNav: AeSideNav = {
    list: {
      list: [
        {
          value: 'Components', icon: 'home', tooltip: 'Home',
          action: () => { }
        },
        {
          value: 'avatar', icon: 'image_search', tooltip: 'Avatar Component',
          action: () => { this.viewInput = components.avatar; this.component = AeAvatarComponent; }
        },
        {
          value: 'card', icon: 'card_giftcard', tooltip: 'Card Component',
          action: () => { this.viewInput = components.card; this.component = AeCardComponent; }
        },
        {
          value: 'form', icon: 'input', tooltip: 'Form Component',
          action: () => { this.viewInput = components.form; this.component = AeFormComponent; }
        },
        {
          value: 'list', icon: 'list', tooltip: 'List Component',
          action: () => { this.viewInput = components.list; this.component = AeListComponent; }
        },
        {
          value: 'Side Nav', icon: 'navigate_next', tooltip: 'SideNav Component',
          action: () => { this.viewInput = components['side-nav']; this.component = AeSideNavComponent; }
        },
        {
          value: 'Toolbar', icon: 'pan_tool', tooltip: 'Toolbar Component',
          action: () => { this.viewInput = components.toolbar; this.component = AeToolbarComponent; }
        },
        {
          value: 'Table', icon: 'table_view', tooltip: 'Table Component',
          action: () => { this.viewInput = components.table; this.component = AeTableComponent; }
        },
        {
          value: 'Details', icon: 'details', tooltip: 'Details Component',
          action: () => { this.viewInput = components.details; this.component = AeDetailsComponent; }
        },
        {
          value: 'Feature Button', icon: 'star_border', tooltip: 'Feature Button',
          action: () => { this.viewInput = components.featureButton; this.component = AeFeatureButtonComponent; }
        }
      ]
    },
    toolbar: {
      list: []
    }
  };

  viewInput: AeView;


}
