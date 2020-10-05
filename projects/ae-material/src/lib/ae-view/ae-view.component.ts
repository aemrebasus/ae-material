import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { components } from '../resolve/components';

export interface AeView {
  name: string;
  component: string;
  selector: string;
  module: string;
  interface: string;
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
    console.log(lastFragment);
    this.input = components[lastFragment];
  }





}
