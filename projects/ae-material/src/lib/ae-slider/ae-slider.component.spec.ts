import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeSliderComponent } from './ae-slider.component';

describe('AeSliderComponent', () => {
  let component: AeSliderComponent;
  let fixture: ComponentFixture<AeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
