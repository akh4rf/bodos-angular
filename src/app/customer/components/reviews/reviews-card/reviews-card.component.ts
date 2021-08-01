import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Review } from '../../../_models/review';

@Component({
  selector: 'reviews-card',
  templateUrl: './reviews-card.component.html',
  styleUrls: ['./reviews-card.component.css'],
})
export class ReviewsCardComponent implements OnInit, AfterViewInit {
  @Input() reviewData!: Review;
  FOLDER_ROOT =
    'https://bodos-assets.s3.amazonaws.com/images/review-card-images/';

  constructor() {}

  ngOnInit(): void {}

  loadReviewStars() {
    for (let i = 1; i <= this.reviewData.rating; i++) {
      let starName: string =
        this.reviewData.firstName +
        '-' +
        this.reviewData.lastName +
        '-star-' +
        i;
      let stars: Element[] = Array.from(
        document.getElementsByClassName(starName)
      ) as Element[];
      for (let star of stars) {
        star.classList.add('star-gold');
      }
    }
  }

  ngAfterViewInit(): void {
    this.loadReviewStars();
  }
}
