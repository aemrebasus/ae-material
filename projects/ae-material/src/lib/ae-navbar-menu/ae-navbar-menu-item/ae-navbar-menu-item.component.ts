import { Component, Input, OnInit } from '@angular/core';

export interface AeNavbarMenuItem {
  value?: string;
  action?: () => void;
  children?: AeNavbarMenuItem[];
}

@Component({
  selector: 'ae-navbar-menu-item',
  templateUrl: './ae-navbar-menu-item.component.html',
  styleUrls: ['./ae-navbar-menu-item.component.css']
})
export class AeNavbarMenuItemComponent implements OnInit {

  @Input() input: AeNavbarMenuItem;

  constructor() { }

  ngOnInit(): void {
  }

}
