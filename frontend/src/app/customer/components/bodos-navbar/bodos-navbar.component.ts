import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTPRequestService } from 'src/app/shared/services/http-request.service';
import { Navigation, Link } from '../../_models/navigation';

@Component({
  selector: 'bodos-navbar',
  templateUrl: './bodos-navbar.component.html',
  styleUrls: ['./bodos-navbar.component.css'],
})
export class BodosNavbarComponent implements OnInit {
  NAVIGATION: Navigation = {
    links: [],
  };

  getLinks() {
    this.httpRequest
      .get('assets/data/navigationData.json')
      .subscribe((data) => {
        for (let link of data.links) {
          if (this.router.url == link['href']) {
            link['isActive'] = true;
          }
          this.NAVIGATION.links.push(JSON.parse(JSON.stringify(link)));
        }
      });
  }

  constructor(
    private httpRequest: HTTPRequestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLinks();
  }
}
