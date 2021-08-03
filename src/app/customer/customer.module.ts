import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BagelOrbitComponent } from './components/bagel-orbit/bagel-orbit.component';
import { BodosNavbarComponent } from './components/bodos-navbar/bodos-navbar.component';
import { LocationCardComponent } from './components/location-card/location-card.component';
import { ReviewsCardComponent } from './components/reviews/reviews-card/reviews-card.component';

import { SharedModule } from '../shared/shared.module';
import { ReviewsMarqueeComponent } from './components/reviews/reviews-marquee/reviews-marquee.component';
import { BodosFooterComponent } from './components/bodos-footer/bodos-footer.component';
import { NavbarLinkComponent } from './components/navbar-link/navbar-link.component';
import { OurStoryPageComponent } from './pages/our-story-page/our-story-page.component';

@NgModule({
  declarations: [
    CustomerComponent,
    HomePageComponent,
    BagelOrbitComponent,
    BodosNavbarComponent,
    LocationCardComponent,
    ReviewsCardComponent,
    ReviewsMarqueeComponent,
    BodosFooterComponent,
    NavbarLinkComponent,
    OurStoryPageComponent,
  ],
  imports: [CommonModule, CustomerRoutingModule, SharedModule],
})
export class CustomerModule {}
