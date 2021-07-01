import { Component, OnInit } from '@angular/core';
import { Location } from '../../_models/location';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  LOCATIONS: Array<Location> = [
    {
      name: 'Emmet',
      img: 'Emmet.png',
      addr1: '1418 Emmet St.',
      addr2: 'Charlottesville, VA 22903',
      phone: '(434) 977-9598',
      hours: {
        MON_THRU_FRI: ['6:30', '8:00'],
        SAT: ['7:00', '8:00'],
        SUN: ['7:30', '4:00'],
      },
    },
    {
      name: 'Preston',
      img: 'Preston.png',
      addr1: '505 Preston Ave.',
      addr2: 'Charlottesville, VA 22903',
      phone: '(434) 293-5224',
      hours: {
        MON_THRU_FRI: ['6:30', '4:00'],
        SAT: ['7:00', '4:00'],
        SUN: ['8:00', '3:00'],
      },
    },
    {
      name: 'UVA Corner',
      img: 'Corner.png',
      addr1: '1609 University Ave.',
      addr2: 'Charlottesville, VA 22903',
      phone: '(434) 293-6021',
      hours: {
        MON_THRU_FRI: ['7:00', '3:00'],
        SAT: ['8:00', '3:00'],
        SUN: ['8:00', '3:00'],
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
