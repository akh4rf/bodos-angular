import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodosFooterComponent } from './bodos-footer.component';

describe('BodosFooterComponent', () => {
  let component: BodosFooterComponent;
  let fixture: ComponentFixture<BodosFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodosFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodosFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
