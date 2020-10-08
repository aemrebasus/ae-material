import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeNavbarMenuItemComponent } from './ae-navbar-menu-item.component';

describe('AeNavbarMenuItemComponent', () => {
  let component: AeNavbarMenuItemComponent;
  let fixture: ComponentFixture<AeNavbarMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeNavbarMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeNavbarMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
