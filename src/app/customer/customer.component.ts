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

  constructor(
    private httpRequest: HTTPRequestService,
    private router: Router
  ) {}

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
