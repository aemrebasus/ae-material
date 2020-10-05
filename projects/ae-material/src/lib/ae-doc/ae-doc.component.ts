import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AeSideNav } from '../ae-side-nav/ae-side-nav.component';
import { AeView } from '../ae-view/ae-view.component';
import { components } from '../meta/components';


@Component({
  selector: 'ae-doc',
  templateUrl: './ae-doc.component.html',
  styleUrls: ['./ae-doc.component.css']
})
export class AeDocComponent implements OnDestroy, OnInit {



  @Input() sideNav: AeSideNav = {
    list: {
      list: [
        {
          value: 'Components', icon: 'home', tooltip: 'Home',
          action: () => { }
        },
        {
          value: 'avatar', icon: 'image_search', tooltip: 'Avatar Component',
          action: () => this.viewInput = components.avatar
        },
        {
          value: 'card', icon: 'card_giftcard', tooltip: 'Card Component',
          action: () => this.viewInput = components.card
        },
        {
          value: 'form', icon: 'input', tooltip: 'Form Component',
          action: () => this.viewInput = components.form
        },
        {
          value: 'list', icon: 'list', tooltip: 'List Component',
          action: () => this.viewInput = components.list
        },
        {
          value: 'Side Nav', icon: 'navigate_next', tooltip: 'SideNav Component',
          action: () => this.viewInput = components['side-nav']
        },
        {
          value: 'Toolbar', icon: 'pan_tool', tooltip: 'Toolbar Component',
          action: () => this.viewInput = components.toobar
        },
        {
          value: 'Table', icon: 'table_view', tooltip: 'Table Component',
          action: () => this.viewInput = components.table
        },
        {
          value: 'Details', icon: 'details', tooltip: 'Details Component',
          action: () => this.viewInput = components.details
        }
      ]
    },
    toolbar: {
      list: []
    }
  };

  viewInput: AeView;

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
