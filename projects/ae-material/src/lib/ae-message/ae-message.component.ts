import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList, ViewChild, ViewRef } from '@angular/core';
import { Subscription } from 'rxjs';
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


type InboxButtonType = {
  id?: string,
  value?: string;
  buttons?: [
    { icon: 'keyboard_arrow_down', action: () => void },
    { icon: 'close', action: () => void }
  ],
  count?: number,
  src?: string,
};

type SendMessageFunction = (from: string, to: string, msg: string) => void;


const sampleMessages: AeMessage = {
  currentUserId: '1',
  sendMessage: (msg: string) => console.log(msg),
  users: [

    { title: 'Ahmet Emrebas', id: '1', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },
    { title: 'Ali Emre', id: '2', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },
    { title: 'Veli Bas', id: '3', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },
    { title: 'Mark Basemre', id: '4', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },
    { title: 'Derda Bl', id: '5', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },
    { title: 'Jan Dabian', id: '6', src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo' },

  ],
  messages: [
    { id: '2', message: 'Nope, I do not remember Ahmet.', createdAt: Date.now() + 100000, from: '2', to: '1', read: false },
    { id: '5', message: 'Nope, I do not remember Ahmet.', createdAt: Date.now() + 100000, from: '2', to: '1', read: false },
    { id: '6', message: 'Nope, I do not remember Ahmet.', createdAt: Date.now() + 100000, from: '2', to: '1', read: false },
    { id: '7', message: 'Nope, I do not remember Ahmet.', createdAt: Date.now() + 100000, from: '2', to: '1', read: false },
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
export class AeMessageComponent implements OnInit, AfterViewInit, OnDestroy {



  /**
   * @description Input of the component
   */
  @Input()
  public input: AeMessage = sampleMessages;

  /**
   * @description If users' messages contains the searchText then show only those users.
   */
  public searchText = '';

  /**
   * @description Toogle the inbox/user list
   */
  public isInboxOpen = false;

  /**
   * @description Meta data of the buttons of message box
   */
  public inboxes: InboxButtonType[] = [];

  /**
   * @description meta data of the message toolbar like send message.
   */
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

  /**
   * @description stores the new message
   */
  public newMessage = '';

  /**
   * @description the users list that filtered by the searchText
   */
  public filteredUsers: AeSingleUser[] = [];

  /**
   * @description the main inbox botton that toogle the user list
   */
  public inboxButton: AeButton = {
    value: this.userTitle(this.input.currentUserId),
    buttons: [
      {
        icon: 'keyboard_arrow_down',
        action: () => this.openInbox()
      }
    ],
    count: this.unreadMessageCount(this.input.currentUserId)
  };


  /**
   * @description The id of user whose inbox is open
   */
  public currentInbox: string = null;

  /**
   * @description  Messages of the users whose id is the currentInbox value (currentInbox stores the currently selected user's id)
   */
  public messages: AeAvatar[] = [];

  ngAfterViewInit(): void {
    // NOTHING HERE?
  }

  ngOnInit(): void {
    this.initFilteredUsers();
  }

  ngOnDestroy(): void {
    // Unsubscribe all
  }

  /**
   * @param id user id
   * returns the number of unread messages.
   */
  public unreadMessageCount(id?: string): number {
    if (id) {
      return this.input.messages.filter(msg => msg.from === id && !msg.read).length;
    }
    return this.input.messages.filter(msg => !msg.read).length;
  }



  private initFilteredUsers(): void {
    this.filteredUsers = this.input.users.filter(user => this.input.currentUserId !== user.id)
      .map(user => ({ ...user, badge: this.unreadMessageCount(user.id) }));
  }

  /**
   * @description when a user is selected from the list, then add the user
   * to the inboxes list that the user inbox appear to left of the main inbox
   * @param id user id
   */
  public openUserInboxById(id: string): void {

    // if the inbox for the user is present but closed, then open the inbox and return.
    if (this.isUserInboxPresent(id)) {
      this.openCurrentInbox(id);
      return;
    }

    // else add the new user inbox and open it.
    this.addNewUserToPresentInboxes(this.createInboxButton(id));
    this.openCurrentInbox(id);

    // if there are more than 4 inboxes are visible, then remove the first inbox from the list.
    if (this.isNumberOfVisibleInboxGreaterThan(4)) {
      this.removeTheFirstInboxFromPresentInboxes();
    }
  }



  /**
   * @description helper method to create an inbox button ( the header appearing at the top of inbox elements)
   */
  private createInboxButton(id): InboxButtonType {
    return {
      id,
      value: this.userTitle(id),
      buttons: [
        {
          icon: 'keyboard_arrow_down',
          action: () => {
            this.openCurrentInbox(id);
          }
        },
        {
          icon: 'close',
          action: () => this.closeInbox(id)
        }
      ],
      count: this.unreadMessageCount(id),
      src: this.userSrc(id)
    };
  }

  private addNewUserToPresentInboxes(newbox: InboxButtonType): void {
    this.inboxes = [newbox, ...this.inboxes];
  }

  private isUserInboxPresent(id: string): boolean {
    return !!this.inboxes.find(e => e.id === id);
  }

  private isNumberOfVisibleInboxGreaterThan(count: number): boolean {
    return this.inboxes.length > count;
  }

  private removeTheFirstInboxFromPresentInboxes(): void {
    this.inboxes.pop();
  }

  /**
   * @param msg message
   * @description filter users by message. set the filteredUsers to the users who has a message that contains the msg value.
   */
  filterUsersByMessage(msg: string): void {
    if (msg === '') {
      this.filteredUsers = this.input.users.filter(user => this.input.currentUserId !== user.id);
      return;
    }

    const filteredMessages = this.input.messages.filter(m => m.message.includes(msg));
    this.filteredUsers = this.input.users.filter(user => {
      return filteredMessages.find(fmsg => fmsg.from === user.id || fmsg.to === user.id);
    });
  }

  /**
   * @description toogle the main inbox. show the users that sent or received a message(s).
   */
  openInbox(): void {
    this.isInboxOpen = !this.isInboxOpen;
  }

  /**
   * @description toogle the inboxes when the user clicks on the close button.
   */
  closeInbox(id: string): void {
    this.inboxes = this.inboxes.filter(inb => inb.id !== id);
    this.currentInbox = null;
  }

  /**
   * @param id user id
   * @description open the inbox of the selected user from the main user list.
   */
  openCurrentInbox(id: string): void {
    if (this.currentInbox === id) {
      this.currentInbox = null;
      return;
    }
    this.currentInbox = id;
    this.setMessagesForCurrentUser();
  }

  /**
   * @description get the messages of the selected users and store them in the messages property. Also sort the message by date.
   */
  setMessagesForCurrentUser(): void {
    const msgs = this.filterMessagesByUserId(this.currentInbox)
      .map(msg => this.convertAeSingleMessageToAeAvatarData(msg))
      .sort(sortByDateProperty);
    this.setMessages(msgs);
  }

  public setMessages(msgs: AeAvatar[]): void {
    this.messages = msgs;
  }

  filterMessagesByUserId(id: string): AeSingleMessage[] {
    return this.input.messages.filter(msg => msg.from === id || msg.to === id);
  }

  convertAeSingleMessageToAeAvatarData(msg: AeSingleMessage): AeAvatar {
    return {
      src: this.userSrc(msg.from),
      title: this.userTitle(msg.from),
      subTitle: msg.message,
      date: this.toLocalStringDate(msg.createdAt)
    };
  }

  getUserPropertyById(propertyKey: string, id: string): any {
    return this.input.users.find(user => user.id === id)[propertyKey];
  }

  userSrc(id: string): string {
    return this.getUserPropertyById('src', id);
  }

  userTitle(id: string): string {
    return this.getUserPropertyById('title', id);
  }

  toLocalStringDate(dateNumber: number): string {
    return new Date(dateNumber).toLocaleTimeString();
  }

  sortAvatarsByDate(msg: AeAvatar[]): AeAvatar[] {
    return msg.sort((a, b) => a.date > b.date ? 1 : a.date < b.date ? -1 : 0);
  }


}

/**
 * @description comparison function for sort function
 */
function sortByProperty(property: string): any {
  return (a, b) => a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0;
}

/**
 * @description date comparison function for sort function
 */
function sortByDateProperty(a: any, b: any): any {
  return sortByProperty('date');
}

