import { Component, Input, OnInit } from '@angular/core';
import { IconType } from '../common/IconType';

interface IconButton {
  icon: IconType;
  action: () => void;
}

export interface AeButton {
  value: string;
  buttons: IconButton[];
}

const sampleButton: AeButton = {
  value: 'Main Inbox',
  buttons: [
    { icon: 'arrow_downward', action: () => alert('Arrow downward') },
    { icon: 'arrow_downward', action: () => alert('Arrow downward') },
  ]
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
