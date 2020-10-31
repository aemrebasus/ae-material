import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { sampleText } from './sample-text';

@Component({
  selector: 'ae-typing',
  templateUrl: './ae-typing.component.html',
  styleUrls: ['./ae-typing.component.css']
})
export class AeTypingComponent implements OnInit, OnDestroy {

  @ViewChild('content') contentElement: ElementRef<HTMLDivElement>;

  @Input() input;

  currentTimeAsSeconds = 0;
  currentTime = '--:--';
  startLabel = 'start';
  scrollCount = 0;

  public letters: { correct?: true | null, wrong?: true | null, index: number, value: string }[];

  public result: {
    correct: number,
    wrong: number,
    speed: string
  } = null;

  public correctLetter = '';
  public currentLetter = '';
  public currentIndex = 0;


  initProperties(): void {
    let index = 0;

    setTimeout(() => {
      this.input = sampleText;
      this.letters = this.input.split('').map(l => ({ index: index++, value: l }));
    }, 0);

    this.currentTimeAsSeconds = 0;
    this.currentTime = '--:--';
    this.startLabel = 'start';
    this.correctLetter = '';
    this.currentLetter = '';
    this.currentIndex = 0;

  }


  ngOnInit(): void {




    this.initProperties();
    const keypressHandler = (event) => {

      if (event.code === 'Space') {
        event.preventDefault();
      }

      if (event.key === 'Shift' || event.key === 'CapsLock' || event.key === 'Alt') { return; }

      this.correctLetter = this.input[this.currentIndex];

      if (event.key === 'Backspace') {
        this.currentIndex--;
        this.letters[this.currentIndex].correct = null;
        this.letters[this.currentIndex].wrong = null;
        return;
      }

      if (this.startLabel === 'start') {
        this.start();
      }

      if (event.key !== this.correctLetter) {
        this.letters[this.currentIndex].wrong = true;
      } else if (event.key === this.correctLetter) {
        this.letters[this.currentIndex].correct = true;
      }

      if (this.currentIndex < this.input.length) {
        this.currentIndex++;
      }

      if (this.currentIndex === this.input.length) {
        this.stop();
        this.calculateResult();
        clearInterval(this.timeInterval);
        return;
      }

      this.scrollCount++;

      if (this.scrollCount > 60) {
        this.contentElement.nativeElement.scrollBy({ top: 45 });
        this.scrollCount = 0;
      }
    };

    document.addEventListener('keydown', keypressHandler);

  }


  ngOnDestroy(): void {

  }

  // tslint:disable-next-line: member-ordering
  public timeInterval = null;
  start(): void {
    if (this.startLabel === 'stop') {
      this.stop();
      return;
    }
    this.startLabel = 'stop';
    this.timeInterval = setInterval(() => {
      this.currentTimeAsSeconds += 1;
      this.currentTime = this.toTime(this.currentTimeAsSeconds);
    }, 1000);
  }

  public stop(): void {
    clearInterval(this.timeInterval);
    this.calculateResult();
  }

  public toTime(seconds: number): string {
    const sec = seconds % 60;
    const min = Math.floor(sec / 60);
    return `${min}:${sec}`;
  }

  public calculateResult(): void {
    const len = this.letters.length;
    const correct = this.letters.filter(e => e.correct).length;
    const wrong = this.letters.filter(e => e.wrong).length;
    const speed = Math.floor((correct / this.currentTimeAsSeconds) * 60 / 5);

    this.result = { correct, wrong, speed: speed + 'WPM' };
  }

  public restart(): void {
    clearInterval(this.timeInterval);
    this.startLabel = 'start';
    this.initProperties();
    this.result = null;
  }


}
