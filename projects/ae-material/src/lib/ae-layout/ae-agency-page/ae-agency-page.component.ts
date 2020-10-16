import { Component, Input, OnInit } from '@angular/core';
import { AePage, AePageModal } from '../AePage';

@Component({
  selector: 'ae-agency-page',
  templateUrl: './ae-agency-page.component.html',
  styleUrls: ['./ae-agency-page.component.css']
})
export class AeAgencyPageComponent implements OnInit {

  public currentModalItem: AePageModal;

  @Input() input: AePage = {
    header: {
      greetingMain: 'Welcome To Ahmet\'s Studio',
      greetingSub: 'Glad to see you here.',
      logo: '/assets/img/navbar-logo.svg',
      tellMeMoreTarget: 'services',
    },
    services: {
      greeting: 'Web & Mobile Development Services',
      services: [
        {
          icon: 'shopping_bag',
          name: 'E-Commerce',
          summary: 'Let\'s build your new generation E-Commerce platform together.'
        },
        {
          icon: 'shopping_bag',
          name: 'Database Development',
          summary: 'Let\'s build your new generation E-Commerce platform together.'
        },
        {
          icon: 'shopping_bag',
          name: 'Email Marketing',
          summary: 'Let\'s build your new generation E-Commerce platform together.'
        },

      ]
    },
    portfolio: {
      greeting: 'JOB JOB',
      portfolios: [
        {
          name: 'Portfolio 1',
          type: 'Design',
          img: '/assets/img/about/1.jpg',
        },
        {
          name: 'Portfolio 1',
          type: 'Type of the portfolio',
          img: '/assets/img/portfolio/03-thumbnail.jpg',
        },
        {
          name: 'Portfolio 1',
          type: 'Design',
          img: '/assets/img/portfolio/03-thumbnail.jpg',
        },
        {
          name: 'Portfolio 1',
          type: 'Design',
          img: '/assets/img/portfolio/03-thumbnail.jpg',
        },
      ]
    },
    about: {
      greeting: 'About us',
      about: [
        {
          date: '2020',
          heading: '2020 is ? ',
          summary: 'Summary....',
          img: '/assets/img/about/1.jpg',
          inverted: false,
        },
        {
          date: '2020',
          heading: '2020 is ? ',
          summary: 'Summary....',
          img: '/assets/img/about/1.jpg',
          inverted: true,
        },
        {
          date: '2020',
          heading: '2020 is ? ',
          summary: 'Summary....',
          img: '/assets/img/about/1.jpg',
          inverted: false,
        },
      ]
    },
    team: {
      greeting: 'Here is our amazing team!',
      clients: [
        { href: '', img: '' }
      ],
      team: [
        {
          memberName: 'Ahmet Emrebas',
          bottomMessage: 'SOme mesage here',
          facebook: 'Facebook link',
          linkedin: 'linkedin link',
          position: 'Position',
          tiwitter: 'twitter link',

        }
      ]
    },
    contact: null,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
