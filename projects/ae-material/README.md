# Angular Materia Library

### Avatar Component 

````
const sampleAvatar: AeAvatar = {
  action: () => { alert('clicked'); },
  src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo',
  title: 'Full Stack Developer',
  subTitle: 'Angular Developer Angular DeveloperAngular DeveloperAngular DeveloperAngular DeveloperAngular DeveloperAngular DeveloperAngular Developer',
  date: '10 - 10 - 2020',
  badge: '100',
};

<ae-avatar [input]="sampleAvatar">

````


### Button 
````
const sampleButton: AeButton = {
  value: 'Main Inbox',
  buttons: [
    { icon: 'arrow_downward', action: () => alert('Arrow downward') },
    { icon: 'arrow_downward', action: () => alert('Arrow downward') },
  ],

  <!-- Badge -->
  count: 40,
};

<ae-button [input]="sampleButton">

````


### Card 

````
const sampleCard: AeCard = {
  action: () => alert('Card action'),
  actionLabel: 'Action Label',
  title: 'Card Title',
  subtitle: 'Card Subtitle'

};

<ae-card [input]="sampleCard">
````


### List
````

const sampleList: AeList = {
  title: 'List Title',
  list: [
    { action: () => alert('list action'), icon: 'first_page', tooltip: 'Below Tooltip', tooltipPosition: 'below', value: 'List value' },
    { action: () => alert('list Action'), icon: 'signal_cellular_connected_no_internet_4_bar', tooltip: 'Right Tooltip', tooltipPosition: 'right', value: 'List value' },
    { action: () => alert('list Action'), icon: 'signal_cellular_connected_no_internet_4_bar', tooltip: 'Left Tooltip', tooltipPosition: 'left', value: 'List value' },
    { action: () => alert('list Action'), icon: 'list_alt', tooltip: 'Above Tooltip', tooltipPosition: 'above', value: 'List value' },
  ]
};

<ae-list [input]="sampleList">

````



### Message

````
const sampleMessages: AeMessage = {

  currentUserId: '1',
  sendMessage: (msgs: AeSingleMessage[], message: string, from: string, to: string) => {
    return [
      ...msgs,
      {
        id: Math.floor((Math.random() * 1000000000)) + '',
        message,
        from,
        to,
        read: false,
        createdAt: Date.now(),
      }
    ];
  },
  onUserInboxOpen: (msgs: AeSingleMessage[], userId: string) => {
    return msgs.map(msg => {
      if (msg.from === userId || msg.to === userId) {
        return {
          ...msg,
          read: true
        };
      } else {
        return msg;
      }
    });
  },
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

<ae-message [input]="sampleMessage">

````

### Video 

````

const sampleVideoInput: AeVideo = {
  videos: [
    {
      id: '1',
      name: 'Video 1 ',
      src: '/assets/videos/hayta-pahali.mp4',
      currentTime: 10,
      bookmarks: [
        {
          title: 'book 1',
          note: 'Bookmark1 note. This is a long note. Let\'s see how it looks',
          time: 5,
        },
        {
          title: 'boo 2',
          note: 'Book note. This is a long note. Let\'s see how it looks',
          time: 15,
        },
        {
          title: 'bookmark 3',
          note: 'Bookmark1 note. This is a long note. Let\'s see how it looks',
          time: 20,
        },
      ]
    },
    {
      id: '2',
      name: 'Video 2',
      currentTime: 30,
      src: '/assets/videos/hayta-pahali.mp4',
      bookmarks: [
        {
          title: 'bookmark 30 foro video 2',
          note: 'Bookmark note',
          time: 20,
        }
      ]
    }
  ]
};

<ae-video [input]="sampleVideo">

````
