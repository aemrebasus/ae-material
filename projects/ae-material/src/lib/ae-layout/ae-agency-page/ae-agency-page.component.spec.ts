import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeAgencyPageComponent } from './ae-agency-page.component';

describe('AeAgencyPageComponent', () => {
  let component: AeAgencyPageComponent;
  let fixture: ComponentFixture<AeAgencyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeAgencyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeAgencyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
