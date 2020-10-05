import { Component, Input, OnInit } from '@angular/core';


export interface AeCard {
  title?: string;
  subtitle?: string;
  action?: () => void;
  actionLabel?: string;
}


@Component({
  selector: 'ae-card',
  templateUrl: './ae-card.component.html',
  styleUrls: ['./ae-card.component.css']
})
export class AeCardComponent implements OnInit {
  @Input() input: AeCard = {
    action: () => alert('Card action'),
    actionLabel: 'Action Label',
    title: 'Card Title',
    subtitle: 'Card Subtitle'

  };
  constructor() { }

  ngOnInit(): void {
  }

}
