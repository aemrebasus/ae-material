import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AeAvatarComponent } from '../ae-avatar/ae-avatar.component';
import { MenuItem } from '../common/MenuItem';

export interface AeList {
  title?: string;
  list: MenuItem[];
}

const sampleList: AeList = {
  title: 'List Title',
  list: [
    { action: () => alert('list action'), icon: 'first_page', tooltip: 'Below Tooltip', tooltipPosition: 'below', value: 'List value' },
    { action: () => alert('list Action'), icon: 'signal_cellular_connected_no_internet_4_bar', tooltip: 'Right Tooltip', tooltipPosition: 'right', value: 'List value' },
    { action: () => alert('list Action'), icon: 'signal_cellular_connected_no_internet_4_bar', tooltip: 'Left Tooltip', tooltipPosition: 'left', value: 'List value' },
    { action: () => alert('list Action'), icon: 'list_alt', tooltip: 'Above Tooltip', tooltipPosition: 'above', value: 'List value' },
  ]
};


@Component({
  selector: 'ae-list',
  templateUrl: './ae-list.component.html',
  styleUrls: ['./ae-list.component.css']
})
export class AeListComponent {

  @Input() input: AeList = sampleList;

}
