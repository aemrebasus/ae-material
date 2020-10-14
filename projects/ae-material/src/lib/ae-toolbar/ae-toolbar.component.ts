import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../common/MenuItem';


export interface AeToolbar {
  list: MenuItem[];
}

const sampleToolbar: AeToolbar = {
  list: [
    { action: () => alert('Toolbar action'), icon: 'first_page', tooltip: 'Below Tooltip', tooltipPosition: 'below' },
    { action: () => alert('Toolbar Action'), icon: 'signal_cellular_connected_no_internet_4_bar', tooltip: 'Right Tooltip', tooltipPosition: 'right' },
    { action: () => alert('Toolbar Action'), icon: 'signal_cellular_connected_no_internet_4_bar', tooltip: 'Left Tooltip', tooltipPosition: 'left' },
    { action: () => alert('Toolbar Action'), icon: 'list_alt', tooltip: 'Above Tooltip', tooltipPosition: 'above' },
  ]
};


@Component({
  selector: 'ae-toolbar',
  templateUrl: './ae-toolbar.component.html',
  styleUrls: ['./ae-toolbar.component.css']
})
export class AeToolbarComponent {

  @Input() input: AeToolbar = sampleToolbar;


  activate(id: string): void {
    this.input.list.find(e => e.id === id).active = true;
  }
}
