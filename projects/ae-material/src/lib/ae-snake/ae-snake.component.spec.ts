import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeSnakeComponent } from './ae-snake.component';

describe('AeSnakeComponent', () => {
  let component: AeSnakeComponent;
  let fixture: ComponentFixture<AeSnakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeSnakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeSnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
