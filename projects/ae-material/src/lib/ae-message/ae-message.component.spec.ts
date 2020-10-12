import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeMessageComponent } from './ae-message.component';

describe('AeMessageComponent', () => {
  let component: AeMessageComponent;
  let fixture: ComponentFixture<AeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
