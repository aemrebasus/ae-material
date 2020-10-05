import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AeSideNav } from '../ae-side-nav/ae-side-nav.component';
import { AeView } from '../ae-view/ae-view.component';
import { sideNavData } from './sidenav-list';






@Component({
  selector: 'ae-doc',
  templateUrl: './ae-doc.component.html',
  styleUrls: ['./ae-doc.component.css']
})
export class AeDocComponent implements OnDestroy, OnInit {

  storeSubscription: Subscription;

  @Input() sideNav: AeSideNav = sideNavData(this.store);

  viewInput: AeView;

  constructor(private store: Store<{ aeDoc: { aeView: AeView } }>) {

  }

  ngOnInit(): void {
    this.storeSubscription = this.store.subscribe(data => {
      this.viewInput = data.aeDoc.aeView;
    });
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }

}
