import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTPRequestService } from 'src/app/shared/services/http-request.service';

@Component({
  selector: 'bodos-navbar',
  templateUrl: './bodos-navbar.component.html',
  styleUrls: ['./bodos-navbar.component.css'],
})
export class BodosNavbarComponent implements OnInit {
  NAVIGATION!: any;

  getNavbarData() {
    this.httpRequest
      .get('assets/data/navigationData.json')
      .subscribe((data) => {
        this.NAVIGATION = data;
        for (let link of this.NAVIGATION.links) {
          if (this.router.url == link['href']) {
            link['isActive'] = true;
          }
        }
      });
  }

  delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  async handleMenuClick(toggle: string) {
    const dropdown: HTMLElement = document.getElementById(
        'navbar-dropdown'
      ) as HTMLElement,
      dropdownLinks: Element[] = Array.from(
        document.getElementsByClassName('dropdown-link')
      );
    switch (toggle) {
      case 'on':
        dropdown.classList.toggle('active');
        await this.delay(100);
        for (let link of dropdownLinks) {
          await this.delay(100);
          link.classList.toggle('active');
        }
        break;
      case 'off':
        dropdown.classList.toggle('active');
        for (let link of dropdownLinks) {
          link.classList.toggle('active');
        }
        break;
    }
  }

  onResize() {
    const dropdown: HTMLElement = document.getElementById(
      'navbar-dropdown'
    ) as HTMLElement;
    if (window.innerWidth > 999 && dropdown.classList.contains('active')) {
      this.handleMenuClick('off');
    }
  }

  constructor(
    private httpRequest: HTTPRequestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getNavbarData();
  }
}
