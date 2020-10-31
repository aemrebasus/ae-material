import { Component, OnInit } from '@angular/core';
import { IconType } from '../common/IconType';



export interface AeSocial {
  facebook?: string;
  linkedin?: string;
  github?: string;
  npm?: string;
  stackOverFlow?: string;
}

const sampleInput: AeSocial = {
  facebook: 'https://www.facebook.com/Aemrebasface/',
  linkedin: 'https://www.linkedin.com/in/ahmet-emrebas/',
  github: 'https://github.com/aemrebasus',
  npm: 'https://www.npmjs.com/~aecsteacher1'
};


@Component({
  selector: 'ae-social',
  templateUrl: './ae-social.component.html',
  styleUrls: ['./ae-social.component.css']
})
export class AeSocialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
