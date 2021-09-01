import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomBagelService {
  BAGEL_FILES = [
    'CinnamonRaisin.png',
    'Everything.png',
    'EverythingWholeWheat.png',
    'Garlic.png',
    'Onion.png',
    'Plain.png',
    'Poppy.png',
    'Salt.png',
    'Sesame.png',
    'WholeWheat.png',
  ];

  getRandomBagel() {
    return (
      'https://bodos-assets.s3.amazonaws.com/images/food/bagels/' +
      this.BAGEL_FILES[Math.floor(10 * Math.random())]
    );
  }

  constructor() {}
}
