import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

type Direction = 'ArrowRight' | 'ArrowLeft' | 'ArrowUp' | 'ArrowDown';
const DIRECTIONS = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];

@Component({
  selector: 'ae-snake',
  templateUrl: './ae-snake.component.html',
  styleUrls: ['./ae-snake.component.css']
})
export class AeSnakeComponent implements OnInit {

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;


  public started = false;
  private gameLoop;

  public boardWidth = 400;
  public boardHeight = 400;
  private readonly RADIUS = 10;
  private readonly START_POINT = { x: 10, y: 10 };
  private readonly MOVE_LENGTH = 1;
  private SPEED = 10;
  private direction = null;
  public position: { x: number, y: number } = this.START_POINT;


  private getContext(): CanvasRenderingContext2D {
    return this.canvas.nativeElement.getContext('2d');
  }

  ngOnInit(): void {
    document.addEventListener('keydown', (event) => {
      if (DIRECTIONS.includes(event.key)) {
        this.direction = event.key;
      }
    });
  }

  clear(): void {
    this.getContext().beginPath();
    this.getContext().fillStyle = 'royalblue';
    this.getContext().rect(this.position.x - this.RADIUS, this.position.y - this.RADIUS, this.RADIUS * 2, this.RADIUS * 2);
    this.getContext().fill();
    this.getContext().closePath();
  }

  render(color?: string): void {
    if (
      this.position.x > this.boardWidth - this.RADIUS
      || this.position.y > this.boardHeight - this.RADIUS
      || this.position.x < this.RADIUS
      || this.position.y < this.RADIUS
    ) {
      alert('You lost the game. Try again');
      this.stop();
    }

    this.getContext().beginPath();
    this.getContext().fillStyle = color || 'yellow';
    this.getContext().arc(this.position.x, this.position.y, this.RADIUS, 0, Math.PI * 2);
    this.getContext().fill();
    this.getContext().closePath();
  }

  public start(): void {
    this.render();
    this.started = true;

    this.gameLoop = setInterval(() => {

      this.clear();

      switch (this.direction) {
        case 'ArrowDown': this.position.y += this.MOVE_LENGTH; break;
        case 'ArrowUp': this.position.y -= this.MOVE_LENGTH; break;
        case 'ArrowRight': this.position.x += this.MOVE_LENGTH; break;
        case 'ArrowLeft': this.position.x -= this.MOVE_LENGTH; break;
        default: break;
      }

      this.render();

    }, this.SPEED);


  }

  stop(): void {
    clearInterval(this.gameLoop);
    this.started = false;
    this.clear();
    this.position = { x: 200, y: 200 };
    this.direction = null;

  }


}
