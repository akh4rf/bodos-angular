import { Component, Input, OnInit } from '@angular/core';
import { BagelOrbit } from '../../_models/bagel-orbit';

@Component({
  selector: 'bagel-orbit',
  templateUrl: './bagel-orbit.component.html',
  styleUrls: ['./bagel-orbit.component.css'],
})
export class BagelOrbitComponent implements OnInit {
  @Input() orbitData!: BagelOrbit;

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
    if (this.orbitData.isActive) {
      return {
        '-webkit-animation': 'spin-right 60s linear infinite',
        animation: 'spin-right 60s linear infinite',
      };
    } else {
      return {};
    }
  }

  /**
   * Places bagels in a perfectly circular orbit
   */
  createOrbit() {
    const TWO_PI = 2 * Math.PI,
      BAGEL_COUNT = this.orbitData.bagels.length,
      R_ORBIT = this.orbitData.sideLength / 2,
      R_BAGEL = this.orbitData.bagelSize / 2,
      CENTER = R_ORBIT - R_BAGEL;

    let counter = 0;

    for (let bagel of this.orbitData.bagels) {
      // Grab angle of bagel
      let ANGLE = counter * (TWO_PI / BAGEL_COUNT);
      // Position bagel
      bagel.x_coord = CENTER + Math.cos(ANGLE) * R_ORBIT;
      bagel.y_coord = CENTER + Math.sin(ANGLE) * R_ORBIT;
      // Increment counter
      counter++;
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.createOrbit();
  }
}
