import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { components } from '../meta/components';

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
export class AeViewComponent implements OnInit {

  @Input() input: AeView;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const fragments = this.router.url.split('/');
    const lastFragment = fragments[fragments.length - 1].trim();
    this.input = components[lastFragment];
  }





}
