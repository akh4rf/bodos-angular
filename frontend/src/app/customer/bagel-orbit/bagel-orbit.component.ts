import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'bagel-orbit',
  templateUrl: './bagel-orbit.component.html',
  styleUrls: ['./bagel-orbit.component.css'],
})
export class BagelOrbitComponent implements OnInit {
  //@Input() sideLength!: number;
  //@Input() bagelSize!: number;
  @Input() isActive!: boolean;

  bagelImg = 'assets/bagel.png';

  resizeTimer: any;

  /* Idea to prevent animation on resize from https://css-tricks.com/stop-animations-during-window-resizing/ */

  onResize() {
    let orbit_div: HTMLElement = document.getElementById(
      'bagelOrbit'
    ) as HTMLElement;
    orbit_div.classList.add('stop-orbit');
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      orbit_div.classList.remove('stop-orbit');
    }, 400);
  }

  /* Credit for orbit animation: https://codepen.io/rss/pen/EWobGz */

  applyOrbit() {
    if (this.isActive) {
      return {
        '-webkit-animation': 'spin-right 60s linear infinite',
        animation: 'spin-right 60s linear infinite',
      };
    } else {
      return {};
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
