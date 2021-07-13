import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodosLogoComponent } from './components/bodos-logo/bodos-logo.component';

@NgModule({
  declarations: [BodosLogoComponent],
  imports: [CommonModule],
  exports: [BodosLogoComponent],
})
export class SharedModule {}
