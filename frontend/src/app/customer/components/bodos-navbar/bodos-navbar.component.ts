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

  delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  async handleMenuClick(toggle: string) {
    const overlay: HTMLElement = document.getElementById(
        'navbar-overlay'
      ) as HTMLElement,
      overlayLinks: Element[] = Array.from(
        document.getElementsByClassName('overlay-link')
      );
    switch (toggle) {
      case 'on':
        overlay.classList.toggle('active');
        await this.delay(100);
        for (let link of overlayLinks) {
          await this.delay(100);
          link.classList.toggle('active');
        }
        break;
      case 'off':
        overlay.classList.toggle('active');
        for (let link of overlayLinks) {
          link.classList.toggle('active');
        }
        break;
    }
  }

  onResize() {
    const overlay: HTMLElement = document.getElementById(
      'navbar-overlay'
    ) as HTMLElement;
    if (window.innerWidth > 999 && overlay.classList.contains('active')) {
      this.handleMenuClick('off');
    }
  }

  constructor(
    private httpRequest: HTTPRequestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLinks();
  }
}
