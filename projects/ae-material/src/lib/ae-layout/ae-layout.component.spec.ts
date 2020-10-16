import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeLayoutComponent } from './ae-layout.component';

describe('AeLayoutComponent', () => {
  let component: AeLayoutComponent;
  let fixture: ComponentFixture<AeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
