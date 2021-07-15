import { Component, OnInit } from '@angular/core';
import { Location } from '../../_models/location';
import { Review } from '../../_models/review';
import { BagelOrbit } from '../../_models/bagel-orbit';

import { HTTPRequestService } from 'src/app/shared/services/http-request.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  LOCATIONS: Array<Location> = [];
  REVIEWS: Array<Review> = [];

  review_card_count = 2;

  OrbitData: Array<BagelOrbit> = [];

  /**
   * A method to retrieve the list of locations from backend
   * @returns
   */
  getLocations() {
    return this.httpRequest
      .get('assets/data/locationData.json')
      .subscribe((locationData) => {
        for (let location of locationData as Location[]) {
          this.LOCATIONS.push(JSON.parse(JSON.stringify(location)));
        }
      });
  }

  /**
   * A method to retrieve the bagel orbit data from backend
   * @returns
   */
  getBagelOrbitData() {
    return this.httpRequest
      .get('assets/data/bagelOrbitData.json')
      .subscribe((orbitData) => {
        for (let orbit of orbitData as BagelOrbit[]) {
          // Only allow one
          if (this.OrbitData.length < 1) {
            this.OrbitData.push(JSON.parse(JSON.stringify(orbit)));
          }
        }
        console.log(this.OrbitData);
      });
  }

  /**
   * A method to retrieve the list of reviews from backend
   * @returns
   */
  getReviews() {
    return this.httpRequest
      .get('assets/data/reviewData.json')
      .subscribe((reviewData) => {
        this.review_card_count *= reviewData.length;
        for (let review of reviewData as Review[]) {
          this.REVIEWS.push(JSON.parse(JSON.stringify(review)));
        }
      });
  }

  constructor(private httpRequest: HTTPRequestService) {}

  ngOnInit(): void {
    this.getLocations();
    this.getReviews();
    this.getBagelOrbitData();
  }
}
