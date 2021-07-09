import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BagelOrbitComponent } from './components/bagel-orbit/bagel-orbit.component';
import { BodosLogoComponent } from '../shared/components/bodos-logo/bodos-logo.component';
import { BodosNavbarComponent } from './components/bodos-navbar/bodos-navbar.component';
import { LocationCardComponent } from './components/location-card/location-card.component';
import { LinkedBtnComponent } from './components/linked-btn/linked-btn.component';
import { ReviewsCardComponent } from './components/reviews/reviews-card/reviews-card.component';

import { SharedModule } from '../shared/shared.module';
import { ReviewsMarqueeComponent } from './components/reviews/reviews-marquee/reviews-marquee.component';

@NgModule({
  declarations: [
    CustomerComponent,
    HomepageComponent,
    BagelOrbitComponent,
    BodosLogoComponent,
    BodosNavbarComponent,
    LocationCardComponent,
    LinkedBtnComponent,
    ReviewsCardComponent,
    ReviewsMarqueeComponent,
  ],
  imports: [CommonModule, CustomerRoutingModule, SharedModule],
})
export class CustomerModule {}
