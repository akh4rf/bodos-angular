import { Component, OnInit } from '@angular/core';
import { HTTPRequestService } from 'src/app/shared/services/http-request.service';
import { Location } from '../../_models/location';

@Component({
  selector: 'jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css'],
})
export class JobsPageComponent implements OnInit {
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
  constructor(private httpRequest: HTTPRequestService) {}

  ngOnInit(): void {
    this.getLocations();
  }
}
