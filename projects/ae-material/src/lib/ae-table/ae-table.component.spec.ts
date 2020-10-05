import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeTableComponent } from './ae-table.component';

describe('AeTableComponent', () => {
  let component: AeTableComponent;
  let fixture: ComponentFixture<AeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
