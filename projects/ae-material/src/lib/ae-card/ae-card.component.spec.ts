import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeCardComponent } from './ae-card.component';

describe('AeCardComponent', () => {
  let component: AeCardComponent;
  let fixture: ComponentFixture<AeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
