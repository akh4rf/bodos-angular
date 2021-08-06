import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css'],
})
export class JobsPageComponent implements OnInit {
  JOBS = [
    'Morning Cook',
    'Evening Cook',
    'Dishwasher',
    'Sandwich Maker',
    'Cashier',
    'Assistant Manager',
    'Manager',
  ];
  constructor() {}

  ngOnInit(): void {}
}
