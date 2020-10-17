import { Component, Input, OnInit } from '@angular/core';

export interface AeView {
  name: string;
  component: string;
  selector: string;
  module: string;
  interface: string;
  notes?: string;
}

@Component({
  selector: 'ae-view',
  templateUrl: './ae-view.component.html',
  styleUrls: ['./ae-view.component.css']
})
export class AeViewComponent {

  @Input() input: AeView;

}
