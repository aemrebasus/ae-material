import { Component, Input, OnInit } from '@angular/core';
import { IconType } from '../common/IconType';

interface IconButton {
  icon?: IconType;
  action?: (id?: string) => void;
}

export interface AeButton {
  value: string;
  buttons: IconButton[];
  count?: number;
  src?: string;
}

const sampleButton: AeButton = {
  value: 'Main Inbox',
  buttons: [
    { icon: 'arrow_downward', action: () => alert('Arrow downward') },
    { icon: 'arrow_downward', action: () => alert('Arrow downward') },
  ],
  count: 40,
};

@Component({
  selector: 'ae-button',
  templateUrl: './ae-button.component.html',
  styleUrls: ['./ae-button.component.css']
})
export class AeButtonComponent implements OnInit {
  @Input() input: AeButton = sampleButton;

  constructor() { }

  ngOnInit(): void {
  }

}
