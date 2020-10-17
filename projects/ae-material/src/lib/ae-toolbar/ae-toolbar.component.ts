import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../common/MenuItem';


export interface AeToolbar {
  list: MenuItem[];
}

const sampleToolbar: AeToolbar = {
  list: [
    { id: '1', action: () => alert('Toolbar action'), icon: 'first_page', tooltip: 'Below Tooltip', tooltipPosition: 'below' },
    {
      id: '2', action: () => alert('Toolbar Action'), icon: 'signal_cellular_connected_no_internet_4_bar',
      tooltip: 'Right Tooltip', tooltipPosition: 'right'
    },
    {
      id: '3', action: () => alert('Toolbar Action'), icon: 'signal_cellular_connected_no_internet_4_bar',
      tooltip: 'Left Tooltip', tooltipPosition: 'left'
    },
    { id: '4', action: () => alert('Toolbar Action'), icon: 'list_alt', tooltip: 'Above Tooltip', tooltipPosition: 'above' },
  ]
};


@Component({
  selector: 'ae-toolbar',
  templateUrl: './ae-toolbar.component.html',
  styleUrls: ['./ae-toolbar.component.css']
})
export class AeToolbarComponent {

  @Input() input: AeToolbar = sampleToolbar;


  public activate(id: string): void {
    console.log('Activating item ');
    this.input.list = this.input.list.map(e => {
      if (e.id === id) {
        return {
          ...e,
          active: true
        };
      }
      return {
        ...e,
        active: false
      };
    });
  }
}
