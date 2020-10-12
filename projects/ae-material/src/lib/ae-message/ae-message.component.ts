import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AeAvatar } from '../ae-avatar/ae-avatar.component';
import { AeButton } from '../ae-button/ae-button.component';
import { AeToolbar } from '../ae-toolbar/ae-toolbar.component';


export interface AeSingleMessage {
  id: string;
  message: string;
  createdAt: number;
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
  currentUserId: string;

  sendMessage: (msg: string) => void;
}


export type SendMessageFunction = (from: string, to: string, msg: string) => void;


const sampleMessages: AeMessage = {
  currentUserId: '1',
  sendMessage: (msg: string) => console.log(msg),
  users: [

    { title: 'Ahmet Emrebas', id: '1', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },
    { title: 'Ali Emre', id: '2', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },
    { title: 'Veli Bas', id: '3', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },
    { title: 'Mark Basemre', id: '4', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },

  ],
  messages: [
    { id: '2', message: 'Nope, I do not remember Ahmet.', createdAt: Date.now() + 100000, from: '2', to: '1', read: false },
    {
      id: '3', message: 'I met you at the gas station. OOO man. I am so sory. I could no tremember you at first. ',
      createdAt: Date.now() + 600000, from: '1', to: '2', read: false
    },
    { id: '4', message: 'I am Ahmet. How are you Ali', createdAt: Date.now() + 50000, from: '1', to: '2', read: true },
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

  public toolbar: AeToolbar = {
    list: [
      {
        icon: 'send',
        tooltip: 'Send message',
        action: () => {
          if (this.newMessage !== '') {
            this.input.sendMessage(this.newMessage);
          }
          this.newMessage = '';
        }
      }
    ]
  };


  public newMessage = '';

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

  public currentInbox: string = null;


  public messages: AeAvatar[] = [];


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
    this.filteredUsers = this.input.users.filter(user => this.input.currentUserId !== user.id);
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
      this.filteredUsers = this.input.users.filter(user => this.input.currentUserId !== user.id);
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
    this.currentInbox = null;
  }

  openCurrentInbox(id: string): void {
    if (this.currentInbox === id) {
      this.currentInbox = null;
      return;
    }
    this.currentInbox = id;
    this.setMessagesForCurrentUser();
  }


  setMessagesForCurrentUser(): void {
    this.messages = this.input.messages
      .filter(msg => msg.from === this.currentInbox || msg.to === this.currentInbox)
      .map(msg => {
        return {
          src: this.input.users.find(user => user.id === msg.from).src,
          title: this.input.users.find(user => user.id === msg.from).title,
          subTitle: msg.message,
          date: new Date(msg.createdAt).toLocaleTimeString()
        } as AeAvatar;

      }).sort((a, b) => a.date > b.date ? 1 : a.date < b.date ? -1 : 0);
  }

}
