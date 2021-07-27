import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodosNavbarComponent } from './bodos-navbar.component';

describe('BodosNavbarComponent', () => {
  let component: BodosNavbarComponent;
  let fixture: ComponentFixture<BodosNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodosNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodosNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
