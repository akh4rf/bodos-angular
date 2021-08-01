import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../_models/location';

@Component({
  selector: 'location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css'],
})
export class LocationCardComponent implements OnInit {
  @Input() locationData!: Location;
  FOLDER_ROOT =
    'https://bodos-assets.s3.amazonaws.com/images/location-card-images/';

  constructor() {}

  ngOnInit(): void {}
}
