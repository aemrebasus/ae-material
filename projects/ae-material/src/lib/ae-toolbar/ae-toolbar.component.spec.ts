import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeToolbarComponent } from './ae-toolbar.component';

describe('AeToolbarComponent', () => {
  let component: AeToolbarComponent;
  let fixture: ComponentFixture<AeToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
