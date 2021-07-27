import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsMarqueeComponent } from './reviews-marquee.component';

describe('ReviewsMarqueeComponent', () => {
  let component: ReviewsMarqueeComponent;
  let fixture: ComponentFixture<ReviewsMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsMarqueeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
