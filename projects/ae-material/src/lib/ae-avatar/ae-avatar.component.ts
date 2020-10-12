import { Component, Input } from '@angular/core';


type ImgClass = 'rounded-circle' | 'rounded-0';

export interface AeAvatar {
  id?: string;
  src?: string;
  title?: string;
  subTitle?: string;
  date?: string;
  action?: () => void;
}

const sampleAvatar: AeAvatar = {
  action: () => { alert('clicked'); },
  src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo',
  title: 'Full Stack Developer',
  subTitle: 'Angular Developer Angular DeveloperAngular DeveloperAngular DeveloperAngular DeveloperAngular DeveloperAngular DeveloperAngular Developer',
  date: '10 - 10 - 2020'
};

@Component({
  selector: 'ae-avatar',
  templateUrl: './ae-avatar.component.html',
  styleUrls: ['./ae-avatar.component.css']
})
export class AeAvatarComponent {

  @Input() input: AeAvatar = sampleAvatar;

}
