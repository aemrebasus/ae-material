import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AeList } from '../ae-list/ae-list.component';
import { AeToolbar } from '../ae-toolbar/ae-toolbar.component';


export interface AeVideoBookmark {
  title: string;
  note: string;
  time: number;
}

export interface AeSingleVideo {
  id: number | string;
  name: string;
  src: string;
  thumbnail?: string;
  currentTime?: number;
  bookmarks?: AeVideoBookmark[];
}

export interface AeVideo {
  videos: AeSingleVideo[];
}

const sampleVideoInput: AeVideo = {
  videos: [
    {
      id: '1',
      name: 'Video 1 ',
      src: '/assets/videos/hayta-pahali.mp4',
      currentTime: 10,
      bookmarks: [
        {
          title: 'bookmark 1',
          note: 'Bookmark1 note',
          time: 5,
        }
      ]
    },
    {
      id: '2',
      name: 'Video 2',
      currentTime: 30,
      src: '/assets/videos/hayta-pahali.mp4',
      bookmarks: [
        {
          title: 'bookmark 1 foro video 2',
          note: 'Bookmark note',
          time: 20,
        }
      ]
    }
  ]
};


@Component({
  selector: 'ae-video',
  templateUrl: './ae-video.component.html',
  styleUrls: ['./ae-video.component.css']
})
export class AeVideoComponent implements OnInit, AfterViewInit, OnDestroy {

  private documentElement = document.documentElement;
  public isFullScreen = false;
  public progressBarValue = 0;
  public volumeValue = 100;
  public isVolumeHidden = true;
  public isPlaying = false;

  public isVideoListOpen = false;
  public selectedVideoFromTheList: AeSingleVideo = null;


  @ViewChild('videoElement') videoElement: ElementRef<HTMLVideoElement>;
  @ViewChild('videoSource') videoSource: ElementRef<HTMLSourceElement>;

  @Input() input: AeVideo = sampleVideoInput;

  videoList: AeList = {
    list: []
  };


  /**
   * @description player controller
   */
  public controls: AeToolbar = {
    list: [
      { id: '1', action: () => this.play(), icon: 'play_arrow', toogle: 'pause', location: 'left' },
      { id: '2', action: () => this.stop(), icon: 'stop', location: 'left', color: 'warn' },
      { id: '3', action: () => this.pause(), icon: 'pause', location: 'left' },
      { id: '4', action: () => this.previous(), icon: 'skip_previous', location: 'left' },
      { id: '5', action: () => this.next(), icon: 'skip_next', location: 'left' },
      { id: '6', action: () => this.mute(), icon: 'volume_mute', location: 'left' },
      { id: '7', action: () => this.volumeDown(), icon: 'volume_down', location: 'left' },
      { id: '8', action: () => this.volumeUp(), icon: 'volume_up', location: 'left' },
      { id: '9', action: () => this.bookmark(), icon: 'bookmark', location: 'right', color: 'accent' },
      { id: '10', action: () => this.closeFullScreen(), icon: 'fullscreen_exit', location: 'right', color: 'accent' },
      { id: '11', action: () => this.fullScreen(), icon: 'fullscreen', location: 'right', color: 'accent' },
      { id: '12', action: () => this.toogleVideoList(), icon: 'list', location: 'right', color: 'accent' },
    ]
  };

  constructor() { }
  ngOnDestroy(): void {
    // Nothing YET
  }

  ngOnInit(): void {
    this.initVideoList();
  }

  ngAfterViewInit(): void {
    this.setupFullScreenConfiguration();
    this.initVideoValues();
    this.initVidePlayerListeners();
  }

  private setupFullScreenConfiguration(): void {
    document.addEventListener('fullscreenchange', (event) => {
      if (document.fullscreenElement) {
        this.isFullScreen = true;
      } else {
        this.isFullScreen = false;
      }
    });

  }

  private setVideoSrc(src: string): void {
    this.videoSource.nativeElement.src = src;
  }

  private initVideoList(): void {
    this.input.videos.forEach(video => {
      this.videoList.list.push({
        icon: 'featured_video',
        value: video.name,
        action: () => {
          this.selectedVideoFromTheList = video;
          this.setVideoSrc(video.src);
          this.load();
          this.play();
          this.hideVideoList();
        }
      });
    });

    // Set the initial video;
  }

  private initVideoValues(): void {
    this.videoElement.nativeElement.volume = this.volumeValue / 100;
    this.setCurrentTime(0);
  }

  private setVolume(volume: number): void {
    if (volume < 0) { volume = 0; }
    if (volume > 100) { volume = 100; }

    this.volumeValue = volume;
    this.updateVolumeValue();
  }

  private addEventListenerForVideoPlayer(type: keyof HTMLMediaElementEventMap, callback: (event) => void): void {
    this.videoElement.nativeElement.addEventListener(type, callback);
  }


  private initVidePlayerListeners(): void {

    this.addEventListenerForVideoPlayer('wheel', (event: WheelEvent) => {
      const up = event.deltaY > 0 ? true : false;
      const ctrl = event.ctrlKey;
      const alt = event.altKey;
      const shift = event.shiftKey;
      // TODO: When scroll up and down
      if (up) {
        if (ctrl) {

        }

      }

    });

    this.addEventListenerForVideoPlayer('click', () => {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    });
    this.addEventListenerForVideoPlayer('play', () => this.isPlaying = true);
    this.addEventListenerForVideoPlayer('pause', () => {
      if (!!this.selectedVideoFromTheList) {
        this.isPlaying = false;
      }
    });
    this.addEventListenerForVideoPlayer('timeupdate', () => this.updateProgressBarValueFromVideoProgress());
  }

  public load(): void {
    this.videoElement.nativeElement.load();
  }

  public play(): void {
    this.videoElement.nativeElement.play();
  }

  public hideVideoList(): void {
    this.isVideoListOpen = false;
  }

  public showVideoList(): void {
    this.isVideoListOpen = true;
  }

  public stop(): void {
    this.pause();
    this.setCurrentTime(0);
  }

  public pause(): void {
    this.videoElement.nativeElement.pause();
  }

  public previous(): void {
    console.log('Previous video!');
  }

  public next(): void {
    console.log('Next video');
  }

  public rewind(): void {

  }

  public foward(): void {

  }

  public volumeUp(): void {
    this.showTheVolumeElement();
    if (this.videoElement.nativeElement.volume <= 0.90) {
      this.videoElement.nativeElement.volume += 0.10;
    }
    this.updateVolumeSliderValue();
  }

  public volumeDown(): void {
    this.showTheVolumeElement();

    if (this.videoElement.nativeElement.volume >= 0.10) {
      this.videoElement.nativeElement.volume -= 0.10;
    }
    this.updateVolumeSliderValue();
  }

  private showTheVolumeElement(): void {
    if (this.isVolumeHidden) {
      this.isVolumeHidden = false;
      setTimeout(() => {
        this.isVolumeHidden = true;
      }, 3000);
    }
  }

  public updateVolumeValue(): void {
    this.videoElement.nativeElement.volume = this.volumeValue / 100;
  }

  private updateProgressBarValueFromVideoProgress(): void {
    this.progressBarValue = (this.getCurrentTime() / this.getVideoDuration()) * 100;
  }
  private setCurrentTime(time: number): void {
    this.videoElement.nativeElement.currentTime = time;
  }
  private getCurrentTime(): number {
    return this.videoElement.nativeElement.currentTime;
  }

  private updateVolumeSliderValue(): void {
    this.volumeValue = this.videoElement.nativeElement.volume * 100;
  }

  private getVideoDuration(): number {
    return this.videoElement.nativeElement.duration;
  }

  private calculateTheCurrentTimeOfVideo(): number {
    return (this.progressBarValue / 100) * this.getVideoDuration();
  }

  public updateProgressBarValue(): void {
    this.videoElement.nativeElement.currentTime = this.calculateTheCurrentTimeOfVideo();
  }


  public mute(): void {
    this.showTheVolumeElement();
    this.videoElement.nativeElement.volume = 0;
    this.updateVolumeSliderValue();
  }


  public bookmark(): void {
    console.log('bookmarking');
  }

  public toogleVideoList(): void {
    this.isVideoListOpen = !this.isVideoListOpen;
  }

  private fullScreen(): void {
    if (this.documentElement.requestFullscreen) {
      this.documentElement.requestFullscreen();
    }
    this.isFullScreen = true;
  }

  private closeFullScreen(): void {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    this.isFullScreen = false;
  }


  public goToTime(event): void {
    this.progressBarValue = 100;
  }



}
