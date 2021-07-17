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
  @Input() id!: number;

  resizeTimer: any;

  /* Idea to prevent animation on resize from https://css-tricks.com/stop-animations-during-window-resizing/ */

  onResize() {
    let marquee: HTMLElement = document.getElementById(
      'reviews-marquee-' + this.id
    ) as HTMLElement;
    marquee.classList.add('animation-paused');
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      marquee.classList.remove('animation-paused');
    }, 400);
  }

  reviewGroups: number[] = [1, 2];

  review_card_spacing: string = '50px';

  /* Inspiration for infinite marquee: https://codepen.io/nickcil/pen/BygPMY */

  constructor() {}

  ngOnInit(): void {}
}
