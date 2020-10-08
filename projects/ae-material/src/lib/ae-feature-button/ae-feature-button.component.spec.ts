import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeFeatureButtonComponent } from './ae-feature-button.component';

describe('AeFeatureButtonComponent', () => {
  let component: AeFeatureButtonComponent;
  let fixture: ComponentFixture<AeFeatureButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeFeatureButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeFeatureButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
