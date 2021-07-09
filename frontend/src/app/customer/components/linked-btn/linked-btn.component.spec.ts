import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedBtnComponent } from './linked-btn.component';

describe('LinkedBtnComponent', () => {
  let component: LinkedBtnComponent;
  let fixture: ComponentFixture<LinkedBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
