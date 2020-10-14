import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AeToolbar } from '../ae-toolbar/ae-toolbar.component';

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

  @ViewChild('videoElement') videoElement: ElementRef<HTMLVideoElement>;

  /**
   * @description player controller
   */
  public controls: AeToolbar = {
    list: [
      { action: () => this.play(), icon: 'play_arrow', location: 'left' },
      { action: () => this.stop(), icon: 'stop', location: 'left' },
      // { action: () => this.pause(), icon: 'pause', location: 'left' },
      // { action: () => this.previous(), icon: 'skip_previous', location: 'left' },
      // { action: () => this.next(), icon: 'skip_next', location: 'left' },
      // { action: () => this.mute(), icon: 'volume_mute', location: 'left' },
      // { action: () => this.volumeDown(), icon: 'volume_down', location: 'left' },
      { action: () => this.volumeUp(), icon: 'volume_up', location: 'left' },
      { action: () => this.bookmark(), icon: 'bookmark', location: 'right' },
      { action: () => this.closeFullScreen(), icon: 'fullscreen_exit', location: 'right' },
      { action: () => this.fullScreen(), icon: 'fullscreen', location: 'right' },
    ]
  };

  constructor() { }

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
  public scrollFunction(): void {

  }
  private initVidePlayerListeners(): void {

    this.addEventListenerForVideoPlayer('wheel', (event: WheelEvent) => {
      const up = event.deltaY > 0 ? true : false;
      const ctrl = event.ctrlKey;
      const alt = event.altKey;
      const shift = event.shiftKey;

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
    this.addEventListenerForVideoPlayer('pause', () => this.isPlaying = false);
    this.addEventListenerForVideoPlayer('pause', () => this.isPlaying = false);
    this.addEventListenerForVideoPlayer('timeupdate', () => this.updateProgressBarValueFromVideoProgress());
  }

  ngOnDestroy(): void {
    // Nothing YET
  }

  ngOnInit(): void {
    // Nothing YET
  }


  public play(): void {
    this.videoElement.nativeElement.play();
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

  private fullScreen(): void {
    if (this.documentElement.requestFullscreen) {
      this.documentElement.requestFullscreen();
    }
  }

  private closeFullScreen(): void {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }


  public goToTime(event): void {
    this.progressBarValue = 100;
  }



}
