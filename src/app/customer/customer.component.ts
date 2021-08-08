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
        resetNavLinks(this.NavData.navbar.links, this.router.url);
      });
  }

  /**
   * Detects when footer link has been clicked, updates active link in navbar accordingly
   */
  handleFooterEmit(PATH: string) {
    resetNavLinks(this.NavData.navbar.links, PATH);
  }

  getNavStyle() {
    switch (this.router.url) {
      case '/':
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

export const resetNavLinks = (linkList: any[], PATH: string) => {
  for (let link of linkList) {
    link['isActive'] = PATH == link['href'];
  }
};
