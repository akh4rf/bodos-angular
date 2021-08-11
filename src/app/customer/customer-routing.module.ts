import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { GiftCardsPageComponent } from './pages/gift-cards-page/gift-cards-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { MerchPageComponent } from './pages/merch-page/merch-page.component';
import { OurStoryPageComponent } from './pages/our-story-page/our-story-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'menu',
        component: MenuPageComponent,
      },
      {
        path: 'our-story',
        component: OurStoryPageComponent,
      },
      {
        path: 'gift-cards',
        component: GiftCardsPageComponent,
      },
      {
        path: 'merch',
        component: MerchPageComponent,
      },
      {
        path: 'jobs',
        component: JobsPageComponent,
      },
      {
        path: 'contact-us',
        component: ContactPageComponent,
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
