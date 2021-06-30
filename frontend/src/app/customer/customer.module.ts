import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BagelOrbitComponent } from './bagel-orbit/bagel-orbit.component';
import { BodosLogoComponent } from './bodos-logo/bodos-logo.component';
import { BodosNavbarComponent } from './bodos-navbar/bodos-navbar.component';

@NgModule({
  declarations: [
    CustomerComponent,
    HomepageComponent,
    BagelOrbitComponent,
    BodosLogoComponent,
    BodosNavbarComponent,
  ],
  imports: [CommonModule, CustomerRoutingModule],
})
export class CustomerModule {}
