import { AfterViewInit, Component, ComponentRef, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { AeList } from '../ae-list/ae-list.component';
import { AeToolbar } from '../ae-toolbar/ae-toolbar.component';
import { MenuItem } from '../common/MenuItem';

export interface AeSideNav {
  list: AeList;
  toolbar?: AeToolbar;
}

@Component({
  selector: 'ae-side-nav',
  templateUrl: './ae-side-nav.component.html',
  styleUrls: ['./ae-side-nav.component.css']
})
export class AeSideNavComponent implements AfterViewInit {
  @ViewChild(MatDrawer) drawer: MatDrawer;

  constructor() { }

  @Input() input: AeSideNav = {
    list: {
      list: [
        { id: '1', action: () => alert('List Item action 1'), icon: 'list', tooltip: 'List item 1', tooltipPosition: 'right', value: 'List Item 1' },
        { id: '2', action: () => alert('List Item action 2'), icon: 'list', tooltip: 'List item 2', tooltipPosition: 'left', value: 'List Item 2' },
        { id: '3', action: () => alert('List Item action 3'), icon: 'list', tooltip: 'List item 3', tooltipPosition: 'above', value: 'List Item 3' },
        { id: '4', action: () => alert('List Item action 4'), icon: 'list', tooltip: 'List item 4', tooltipPosition: 'below', value: 'List Item 4' }
      ]
    },
    toolbar: {
      list: [
        { id: '1', action: () => alert('Toolbar click'), icon: 'security', tooltip: 'Tooltip' },
        { id: '2', action: () => alert('Toolbar click'), icon: 'arrow_back_ios', tooltip: 'Tooltip' },
        { id: '3', action: () => alert('Toolbar click'), icon: 'work_off', tooltip: 'Tooltip' },
      ]
    }
  };

  ngAfterViewInit(): void {
    this.input.toolbar.list.unshift({
      id: 1000001, action: () => this.toogleDrawer(), icon: 'menu', tooltip: 'Open Menu'
    });

    this.input.list.list.unshift({
      id: 123123, action: () => this.toogleDrawer(), icon: 'close', tooltip: 'Close Menu',
    });
  }


  toogleDrawer(): void {
    if (this.drawer.opened) {
      this.drawer.close();
      return;
    }
    this.drawer.open();
  }




}
