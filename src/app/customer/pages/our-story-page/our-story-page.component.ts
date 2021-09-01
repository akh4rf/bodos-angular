import { Component, OnInit } from '@angular/core';
import { RandomBagelService } from '../../services/random-bagel.service';

@Component({
  selector: 'our-story-page',
  templateUrl: './our-story-page.component.html',
  styleUrls: ['./our-story-page.component.css'],
})
export class OurStoryPageComponent implements OnInit {
  TIMELINE = [
    {
      date: 1988,
      text: "The first Bodo's Bagels opens on Emmet Street.",
    },
    {
      date: 1993,
      text: "Preston Avenue Bodo's opens.",
    },
    {
      date: 2005,
      text: "Bodo's comes to The Corner, and students rejoice.",
    },
  ];

  randomBagel() {
    return this.bagelService.getRandomBagel();
  }

  constructor(private bagelService: RandomBagelService) {}

  ngOnInit(): void {}
}
