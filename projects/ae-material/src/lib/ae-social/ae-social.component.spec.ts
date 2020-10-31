import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeSocialComponent } from './ae-social.component';

describe('AeSocialComponent', () => {
  let component: AeSocialComponent;
  let fixture: ComponentFixture<AeSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
