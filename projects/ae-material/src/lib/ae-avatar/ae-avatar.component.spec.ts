import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeAvatarComponent } from './ae-avatar.component';

describe('AeAvatarComponent', () => {
  let component: AeAvatarComponent;
  let fixture: ComponentFixture<AeAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
