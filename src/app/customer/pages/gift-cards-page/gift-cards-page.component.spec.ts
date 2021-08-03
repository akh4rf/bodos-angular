import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardsPageComponent } from './gift-cards-page.component';

describe('GiftCardsPageComponent', () => {
  let component: GiftCardsPageComponent;
  let fixture: ComponentFixture<GiftCardsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftCardsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftCardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
