import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodosLogoComponent } from './components/bodos-logo/bodos-logo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BodosLogoComponent],
  imports: [CommonModule, RouterModule],
  exports: [BodosLogoComponent],
})
export class SharedModule {}
