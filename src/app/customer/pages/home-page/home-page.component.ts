import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Location } from '../../_models/location';
import { Review } from '../../_models/review';
import { BagelOrbit } from '../../_models/bagel-orbit';

import { HTTPRequestService } from 'src/app/shared/services/http-request.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  FOLDER_ROOT = 'https://bodos-assets.s3.amazonaws.com/images/';

  LOCATIONS!: Array<Location>;
  /**
   * A method to retrieve the list of locations from backend
   * @returns
   */
  getLocations() {
    return this.httpRequest
      .get(this.httpRequest.getPHPBaseURL() + 'locations/all-locations.php')
      .subscribe((locationData) => {
        this.LOCATIONS = locationData;
      });
  }

  OrbitData!: BagelOrbit;
  /**
   * A method to retrieve the bagel orbit data from backend
   * @returns
   */
  getBagelOrbitData() {
    return this.httpRequest
      .get('assets/data/bagelOrbitData.json')
      .subscribe((orbitData: BagelOrbit) => {
        this.OrbitData = orbitData;
      });
  }

  REVIEWS!: Array<Review>;
  review_card_count = 2;
  /**
   * A method to retrieve the list of reviews from backend
   * @returns
   */
  getReviews() {
    return this.httpRequest
      .get(this.httpRequest.getPHPBaseURL() + 'reviews/all-reviews.php')
      .subscribe((reviewData) => {
        this.review_card_count *= reviewData.length;
        this.REVIEWS = reviewData;
      });
  }

  positionReviews() {
    let marqueeDiv = document.getElementById(
        'reviews-marquee-1'
      ) as HTMLElement,
      marqueeHeight = parseFloat(window.getComputedStyle(marqueeDiv).height);
    marqueeDiv.style.top = marqueeHeight / -2 + 'px';
  }

  /**
   * Workaround to buy the review marquee to have time to load into DOM and reposition
   * Credit: https://stackoverflow.com/a/47988441
   */
  scrollToTop() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }

  reviewsObserver = new IntersectionObserver((entries, reviewsObserver) => {
    this.positionReviews();
  }, {});

  constructor(private httpRequest: HTTPRequestService) {}

  ngOnInit(): void {
    this.scrollToTop();
    this.getLocations();
    this.getReviews();
    this.getBagelOrbitData();
  }

  ngAfterViewInit(): void {
    this.reviewsObserver.observe(
      document.querySelector('#reviews') as HTMLElement
    );
  }
}
