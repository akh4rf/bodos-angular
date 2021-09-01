import { Component, OnInit } from '@angular/core';
import { RandomBagelService } from '../../services/random-bagel.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  randomBagel() {
    return this.bagelService.getRandomBagel();
  }

  constructor(private bagelService: RandomBagelService) {}

  ngOnInit(): void {}
}
