import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
      });
  }

  getNavStyle() {
    switch (this.router.url) {
      case '/':
      case '/our-story':
        return { position: 'absolute' };
      default:
        return { position: 'relative', background: 'var(--primary)' };
    }
  }

  getFooterStyle() {
    switch (this.router.url) {
      case '/':
        return {};
      default:
        return { marginTop: 'auto' };
    }
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

  constructor(private httpRequest: HTTPRequestService, private router: Router) {
    // Scroll to top when route changes
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.scrollToTop();
      }
    });
  }

  ngOnInit(): void {
    this.getNavigationData();
    let container = document.querySelector('app-customer') as HTMLElement;
    switch (this.router.url) {
      case '/':
        container.style.display = 'block';
        break;
      default:
        container.style.display = 'flex';
        container.style.minHeight = '100vh';
        container.style.flexDirection = 'column';
        break;
    }
  }
}
