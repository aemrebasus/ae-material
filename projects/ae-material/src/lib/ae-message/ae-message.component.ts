import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { AeAvatar } from '../ae-avatar/ae-avatar.component';
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
  currentUser: string;
}





const sampleMessages: AeMessage = {
  currentUser: '1',
  users: [
    { title: 'Ali Emre', id: '2', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },
    { title: 'Veli Bas', id: '3', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },
    { title: 'Mark Basemre', id: '4', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },

  ],
  messages: [
    { id: '1', message: 'I am Ahmet. How are you Ali', createdAt: 'date...', from: '1', to: '2', read: true },
    { id: '2', message: 'Ahmet Ahmet, do not you remember me, Ali!', createdAt: 'date...', from: '1', to: '2', read: false },
    { id: '3', message: 'From Ahmet to Veli', createdAt: 'date...', from: '1', to: '3', read: true },
    { id: '4', message: 'Veli, this is Ahmet', createdAt: 'date...', from: '1', to: '3', read: false },
    { id: '5', message: 'Ahmet? WHich Ahmet? I am not Veli. I am his wife', createdAt: 'date...', from: '3', to: '1', read: false },
    { id: '6', message: 'OOO, I remembered, Ahmet. I will tell Veli.', createdAt: 'date...', from: '3', to: '1', read: true },
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


  @Input()
  public input: AeMessage = sampleMessages;
  
  public searchText = '';
  public isInboxOpen = false;
  public inboxs: {
    id: string,
    open: boolean;
    value: string;
    buttons: [
      { icon: 'keyboard_arrow_down', action: () => void },
      { icon: 'close', action: () => void }
    ]
  }[] = [];


  public filteredUsers: AeSingleUser[] = [];

  public inboxButton: AeButton = {
    value: 'Inbox',
    buttons: [
      {
        icon: 'keyboard_arrow_down',
        action: () => this.openInbox()
      }
    ]
  };

  currentInbox: string;

  public getButtonForUser(id: string): AeButton {
    const userName = this.input.users.find(u => u.id === id).title;
    return {
      value: userName,
      buttons: [
        { icon: 'keyboard_arrow_down', action: () => console.log('Open inbox') },
        { icon: 'close', action: () => alert('Hello there') }
      ]
    };
  }

  ngOnInit(): void {
    this.filteredUsers = this.input.users;
  }

  selectUser(id: string): void {


    if (this.inboxs.find(e => e.id === id)) {
      return;
    }

    if (this.inboxs.length > 4) {
      this.inboxs.shift();
    }


    const userName = this.input.users.find(user => user.id === id).title;


    this.inboxs = [
      {
        id,
        open: false,
        value: userName,
        buttons: [
          { icon: 'keyboard_arrow_down', action: () => this.openCurrentInbox(id) },
          { icon: 'close', action: () => this.closeInbox(id) }
        ]
      },
      ...this.inboxs,
    ];
  }

  findMessage(msg: string): void {
    if (msg === '') {
      this.filteredUsers = this.input.users;
      return;
    }

    const filteredMessages = this.input.messages.filter(m => m.message.includes(msg));
    this.filteredUsers = this.input.users.filter(user => {
      return filteredMessages.find(fmsg => fmsg.from === user.id || fmsg.to === user.id);
    });
  }

  openInbox(): void {
    this.isInboxOpen = !this.isInboxOpen;
  }

  closeInbox(id: string): void {
    this.inboxs = this.inboxs.filter(inb => inb.id !== id);
  }

  openCurrentInbox(id: string): void {
    if (this.currentInbox === id) {
      this.currentInbox = null;
      return;
    }
    this.currentInbox = id;
  }

}
