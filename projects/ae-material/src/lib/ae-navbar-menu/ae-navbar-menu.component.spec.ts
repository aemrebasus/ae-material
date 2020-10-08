import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeNavbarMenuComponent } from './ae-navbar-menu.component';

describe('AeNavbarMenuComponent', () => {
  let component: AeNavbarMenuComponent;
  let fixture: ComponentFixture<AeNavbarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeNavbarMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeNavbarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
