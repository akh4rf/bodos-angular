import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../../_models/review';

@Component({
  selector: 'reviews-marquee',
  templateUrl: './reviews-marquee.component.html',
  styleUrls: ['./reviews-marquee.component.css'],
})
export class ReviewsMarqueeComponent implements OnInit {
  @Input() reviews_list!: Array<Review>;
  @Input() count!: number;

  reviewGroups: number[] = [1, 2];

  review_card_spacing: string = '50px';

  /* Inspiration for infinite marquee: https://codepen.io/nickcil/pen/BygPMY */

  constructor() {}

  ngOnInit(): void {}
}
