import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeTypingComponent } from './ae-typing.component';

describe('AeTypingComponent', () => {
  let component: AeTypingComponent;
  let fixture: ComponentFixture<AeTypingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeTypingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeTypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
