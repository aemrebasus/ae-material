import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { IconType } from '../common/IconType';


export interface AeDetails {
  data: { [key: string]: string | number };
  onDelete?: (id?: string) => void;
  onEdit?: (id?: string) => void;
  onBack?: () => void;
}


const sampleData: AeDetails = {
  data: {
    firstName: 'Ahmet Emrebas',
    comnay: 'Ng Design'
  },
  onDelete: () => console.log('Clicked Delete'),
  onEdit: () => console.log('Clicked Edit'),
  onBack: () => console.log('Clicked Back')
};

@Component({
  selector: 'ae-ae-details',
  templateUrl: './ae-details.component.html',
  styleUrls: ['./ae-details.component.scss']
})
export class AeDetailsComponent implements OnInit, OnDestroy {

  @Input() input: AeDetails = sampleData;

  activeRouteSub: Subscription;

  urls: string[];
  data: [string, string | number][];
  entityData: { id: string } | any;

  // ICONS
  iconDelete: IconType = 'delete';
  iconGoBack: IconType = 'arrow_back';
  iconEdit: IconType = 'edit';


  constructor(private router: Router, private activatedRoute: ActivatedRoute, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    if (this.input) {
      this.entityData = this.input.data;
      this.data = Object.entries(this.input.data);
    } else {

      this.urls = this.router.url.split('/');

      this.activeRouteSub = this.activatedRoute.data.pipe(map(d => d.resolved)).subscribe(cardData => {
        if (cardData) {
          this.entityData = cardData;
          this.data = Object.entries(cardData);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.activeRouteSub?.unsubscribe();
  }


  goBack(): void {
    if (this.input.onBack) {
      this.input.onBack();
      return;
    }
    this.router.navigate(this.urls.slice(0, this.urls.length - 2));
  }

  edit(): void {
    if (this.input.onEdit) {
      this.input.onEdit();
      return;
    }
    this.router.navigate(this.urls.slice(0, this.urls.length - 2).concat('edit').concat(this.entityData.id));
  }

  delete(): void {
    if (this.input.onDelete) {
      this.input.onDelete();
      return;
    }
    console.log('Deleting the item');
  }

  confirmDelete(): void {
    console.log('Compirming delete');
  }

}



