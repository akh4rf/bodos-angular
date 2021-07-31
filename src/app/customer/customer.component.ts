import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTPRequestService } from '../shared/services/http-request.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  NavData!: any;

  getNavigationData() {
    this.httpRequest
      .get('assets/data/navigationData.json')
      .subscribe((data) => {
        this.NavData = data;
        for (let link of this.NavData.navbar.links) {
          if (this.router.url == link['href']) {
            link['isActive'] = true;
          }
        }
      });
  }

  constructor(
    private httpRequest: HTTPRequestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getNavigationData();
  }
}
