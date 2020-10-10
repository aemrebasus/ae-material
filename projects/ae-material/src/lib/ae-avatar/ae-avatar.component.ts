import { Component, Input } from '@angular/core';


export interface AeAvatar {
  src: string;
  title: string;
  subTitle: string;
  action: () => void;
}

const sampleAvatar = {
  action: () => { },
  src: 'https://lh3.googleusercontent.com/ogw/ADGmqu8DptS2o9V5e3YGX4BY3QGvkj-4C8A1ruTTd6Vw=s83-c-mo',
  subTitle: 'Angular Developer',
  title: 'Full Stack Developer',
};

@Component({
  selector: 'ae-avatar',
  templateUrl: './ae-avatar.component.html',
  styleUrls: ['./ae-avatar.component.css']
})
export class AeAvatarComponent {

  @Input() input: AeAvatar = sampleAvatar;

}
