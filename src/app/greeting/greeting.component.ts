import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ae-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  public name = 'undefined';
  constructor() { }

  ngOnInit(): void {

  }

  redirect(): void {
    this.name = 'AHmet emrebas';
  }

}


