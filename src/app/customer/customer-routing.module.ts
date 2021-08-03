import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OurStoryPageComponent } from './pages/our-story-page/our-story-page.component';

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
        path: 'our-story',
        component: OurStoryPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
