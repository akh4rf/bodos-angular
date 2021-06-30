import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodosLogoComponent } from './bodos-logo.component';

describe('BodosLogoComponent', () => {
  let component: BodosLogoComponent;
  let fixture: ComponentFixture<BodosLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodosLogoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodosLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
