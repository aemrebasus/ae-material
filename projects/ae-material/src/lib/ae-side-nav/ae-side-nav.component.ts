import { Component, Input, OnInit } from '@angular/core';
import { AeList } from '../ae-list/ae-list.component';
import { AeToolbar } from '../ae-toolbar/ae-toolbar.component';
import { MenuItem } from '../common/MenuItem';

export interface AeSideNav {
  list: AeList;
  toolbar?: AeToolbar;
}

const sampleSideNav: AeSideNav = {
  list: {
    list: [
      { action: () => alert('List Item action 1'), icon: 'list', route: 'list', tooltip: 'List item 1', tooltipPosition: 'right', value: 'List Item 1' },
      { action: () => alert('List Item action 2'), icon: 'list', route: 'list', tooltip: 'List item 2', tooltipPosition: 'left', value: 'List Item 2' },
      { action: () => alert('List Item action 3'), icon: 'list', route: 'list', tooltip: 'List item 3', tooltipPosition: 'above', value: 'List Item 3' },
      { action: () => alert('List Item action 4'), icon: 'list', route: 'list', tooltip: 'List item 4', tooltipPosition: 'below', value: 'List Item 4' }
    ]
  },
  toolbar: {
    list: [
      { action: () => alert('Toolbar click'), icon: 'home', route: 'toolbar', tooltip: 'Tooltip' },
      { action: () => alert('Toolbar click'), icon: 'list', route: 'toolbar', tooltip: 'Tooltip' },
      { action: () => alert('Toolbar click'), icon: 'work_off', route: 'toolbar', tooltip: 'Tooltip' },
    ]
  }
};

@Component({
  selector: 'ae-side-nav',
  templateUrl: './ae-side-nav.component.html',
  styleUrls: ['./ae-side-nav.component.css']
})
export class AeSideNavComponent implements OnInit {

  @Input() input: AeSideNav = sampleSideNav;

  constructor() {
  }

  ngOnInit(): void {
  }

}
