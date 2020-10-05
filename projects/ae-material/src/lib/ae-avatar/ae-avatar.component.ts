import { Component, Input, OnInit } from '@angular/core';


export interface AeAvatar {
  src: string;
  title: string;
  subTitle: string;
  action: () => void;
}

const sampleAvatar = {
  action: () => { },
  src: '/assets/icons/logo.png',
  subTitle: 'Sub title',
  title: 'Title',
};

@Component({
  selector: 'ae-avatar',
  templateUrl: './ae-avatar.component.html',
  styleUrls: ['./ae-avatar.component.css']
})
export class AeAvatarComponent implements OnInit {

  @Input() input: AeAvatar = sampleAvatar;

  constructor() { }

  ngOnInit(): void {
  }



}
