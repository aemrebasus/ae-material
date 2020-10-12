import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { AeButton } from '../ae-button/ae-button.component';


export interface AeSingleMessage {
  id: string;
  message: string;
  createdAt: string;
  read: boolean;
  from: string;
  to: string;
}

export interface AeSingleUser {
  id: string;
  title: string;
  src: string;
  action?: () => void;
}

export interface AeMessage {
  users: AeSingleUser[];
  messages: AeSingleMessage[];
}



const sampleMessages: AeMessage = {

  users: [
    { title: 'Ahmet Emrebas', id: '1', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },
    { title: 'Ahmet Emre', id: '2', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },
    { title: 'Ahmet Bas', id: '3', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },
    { title: 'Ahmet Basemre', id: '4', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },

  ],
  messages: [
    { id: '1', message: 'First Message', createdAt: 'date...', from: '1', to: '2', read: true },
    { id: '2', message: 'First Message', createdAt: 'date...', from: '1', to: '2', read: false },
    { id: '3', message: 'First Message', createdAt: 'date...', from: '1', to: '3', read: true },
    { id: '4', message: 'First Message', createdAt: 'date...', from: '1', to: '3', read: false },
    { id: '5', message: 'First Message', createdAt: 'date...', from: '3', to: '1', read: false },
    { id: '6', message: 'First Message', createdAt: 'date...', from: '3', to: '1', read: true },
  ]
};

@Component({
  selector: 'ae-message',
  templateUrl: './ae-message.component.html',
  styleUrls: ['./ae-message.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0 }),
            animate('1s ease-out', style({ height: 400 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 400 }),
            animate('1s ease-in', style({ height: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AeMessageComponent implements OnInit {


  @Input() input: AeMessage = sampleMessages;
  selectedUsers: AeSingleUser[] = [];
  isInboxOpen = false;


  inboxButton: AeButton = {
    value: 'Inbox',
    buttons: [{ icon: 'keyboard_arrow_down', action: () => this.openInbox() }]
  };

  ngOnInit(): void {

  }

  selectUser(): void {

  }

  openInbox(): void {
    this.isInboxOpen = !this.isInboxOpen;
  }

}
