import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeVideoComponent } from './ae-video.component';

describe('AeVideoComponent', () => {
  let component: AeVideoComponent;
  let fixture: ComponentFixture<AeVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
