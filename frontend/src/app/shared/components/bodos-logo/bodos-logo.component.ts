import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bodos-logo',
  templateUrl: './bodos-logo.component.html',
  styleUrls: ['./bodos-logo.component.css'],
})
export class BodosLogoComponent implements OnInit {
  @Input() height!: string;
  @Input() width!: string;
  @Input() fillColor!: string;

  handleClick() {
    this.router.navigate(['']);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    const video = document.getElementById('main-video') as HTMLVideoElement;

    video.muted = true;
  }
}
