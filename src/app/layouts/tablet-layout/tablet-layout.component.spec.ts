import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletLayoutComponent } from './tablet-layout.component';

describe('TabletLayoutComponent', () => {
  let component: TabletLayoutComponent;
  let fixture: ComponentFixture<TabletLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabletLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
