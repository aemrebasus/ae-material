import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AeSideNav } from '../ae-side-nav/ae-side-nav.component';
import { AeView } from '../ae-view/ae-view.component';
import { components } from '../resolve/components';
import { setView } from './actions';


function sideNavData(store: Store): AeSideNav {
  return {
    list: {
      list: [
        {
          value: 'Components',
          route: '/ae-material/doc',
          icon: 'home',
          tooltip: 'Home',
        },
        {
          value: 'avatar',
          route: 'avatar',
          icon: 'image_search',
          tooltip: 'Avatar Component',
          action: () => store.dispatch(setView(components.avatar))

        },
        {
          value: 'card',
          route: 'card',
          icon: 'card_giftcard',
          tooltip: 'Card Component',
          action: () => store.dispatch(setView(components.card))
        },
        {
          value: 'form',
          route: 'form',
          icon: 'input',
          tooltip: 'Form Component',
          action: () => store.dispatch(setView(components.form))
        },
        {
          value: 'list',
          route: 'list',
          icon: 'list',
          tooltip: 'List Component',
          action: () => store.dispatch(setView(components.list))
        },
        {
          value: 'Side Nav',
          route: 'side-nav',
          icon: 'navigate_next',
          tooltip: 'SideNav Component',
          action: () => store.dispatch(setView(components['side-nav']))
        },
        {
          value: 'Toolbar',
          route: 'toolbar',
          icon: 'pan_tool',
          tooltip: 'Toolbar Component',
          action: () => store.dispatch(setView(components.toolbar))
        },



      ]
    },
    toolbar: {
      list: []
    }
  };
}


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
