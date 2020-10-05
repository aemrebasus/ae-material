import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeSideNavComponent } from './ae-side-nav.component';

describe('AeSideNavComponent', () => {
  let component: AeSideNavComponent;
  let fixture: ComponentFixture<AeSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
