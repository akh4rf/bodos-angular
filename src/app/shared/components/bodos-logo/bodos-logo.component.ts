import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bodos-logo',
  templateUrl: './bodos-logo.component.html',
  styleUrls: ['./bodos-logo.component.css'],
})
export class BodosLogoComponent {
  @Input() height!: string;
  @Input() width!: string;
  @Input() fillColor!: string;

  handleClick() {
    this.router.navigate(['']);
  }

  constructor(private router: Router) {}
}
