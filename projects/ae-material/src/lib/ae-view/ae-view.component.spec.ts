import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeViewComponent } from './ae-view.component';

describe('AeViewComponent', () => {
  let component: AeViewComponent;
  let fixture: ComponentFixture<AeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
