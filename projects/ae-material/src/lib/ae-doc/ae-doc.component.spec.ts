import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeDocComponent } from './ae-doc.component';

describe('AeDocComponent', () => {
  let component: AeDocComponent;
  let fixture: ComponentFixture<AeDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
