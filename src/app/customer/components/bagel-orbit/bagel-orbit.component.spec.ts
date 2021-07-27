import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagelOrbitComponent } from './bagel-orbit.component';

describe('BagelOrbitComponent', () => {
  let component: BagelOrbitComponent;
  let fixture: ComponentFixture<BagelOrbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BagelOrbitComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagelOrbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
