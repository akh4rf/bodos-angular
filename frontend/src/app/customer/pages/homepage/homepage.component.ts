import { Component, OnInit } from '@angular/core';
import { Location } from '../../_models/location';
import { Review } from '../../_models/review';

import { HTTPRequestService } from 'src/app/shared/services/http-request.service';
import { InstaAPIRequestService } from 'src/app/shared/services/insta-api-request.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  LOCATIONS: Array<Location> = [];
  REVIEWS: Array<Review> = [];

  instagram_posts: any[] = [];

  review_card_count = 2;

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

  getInstaPosts(num: number) {
    this.instaRequest.getMediaFromUser('me').subscribe((data) => {
      for (let i = 0; i < num; i++) {
        this.instagram_posts.push(data.data[i]);
      }
      console.log(this.instagram_posts);
    });
  }

  constructor(
    private httpRequest: HTTPRequestService,
    private instaRequest: InstaAPIRequestService
  ) {}

  ngOnInit(): void {
    this.getLocations();
    this.getReviews();
  }
}
