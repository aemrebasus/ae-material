import { Component, OnInit } from '@angular/core';
import { AeToolbar } from '../ae-toolbar/ae-toolbar.component';

@Component({
  selector: 'ae-video',
  templateUrl: './ae-video.component.html',
  styleUrls: ['./ae-video.component.css']
})
export class AeVideoComponent implements OnInit {

  /**
   * @description player controller
   */
  public controls: AeToolbar = {
    list: [
      { action: () => console.log('play'), icon: 'play_arrow', location: 'left' },
      { action: () => console.log('stop'), icon: 'stop', location: 'left' },
      { action: () => console.log('pause'), icon: 'pause', location: 'left' },
      { action: () => console.log('previous'), icon: 'skip_previous', location: 'left' },
      { action: () => console.log('next'), icon: 'skip_next', location: 'left' },
      { action: () => console.log('volume up'), icon: 'volume_up', location: 'left' },
      { action: () => console.log('mute'), icon: 'volume_up', location: 'left' },
      { action: () => console.log('volume down'), icon: 'volume_down', location: 'left' },
      { action: () => console.log('bookmark'), icon: 'bookmark', location: 'right' },
      { action: () => console.log('minumize'), icon: 'fullscreen_exit', location: 'right' },
      { action: () => console.log('fullscreen'), icon: 'fullscreen', location: 'right' },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
