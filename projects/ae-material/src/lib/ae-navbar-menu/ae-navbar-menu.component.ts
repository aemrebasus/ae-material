import { Component, Input, OnInit } from '@angular/core';
import { AeNavbarMenuItem } from './ae-navbar-menu-item/ae-navbar-menu-item.component';

export interface AeNavbarMenu {
  items: AeNavbarMenuItem[];
}

const sampleMenu: AeNavbarMenu = {
  items: [
    {
      value: 'Menu 0 ', children: [
        { value: 'Sub 1', action: () => alert('Sub1') },
        { value: 'Sub 2', action: () => alert('Sub2') },
        { value: 'Sub 3', action: () => alert('Sub3') },
      ]
    },
    { value: 'menu 1', children: [{}], action: () => alert('Menu 1') },
    { value: 'Menu 2', children: [{}], action: () => alert('Menu 2') }
  ]
};


@Component({
  selector: 'ae-navbar-menu',
  templateUrl: './ae-navbar-menu.component.html',
  styleUrls: ['./ae-navbar-menu.component.css']
})
export class AeNavbarMenuComponent implements OnInit {


  @Input() input: AeNavbarMenu = sampleMenu;
  constructor() { }

  ngOnInit(): void {
  }

}
