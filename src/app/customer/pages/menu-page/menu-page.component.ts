import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css'],
})
export class MenuPageComponent implements OnInit {
  MENU = {
    bagels: {
      normalPrice: 0.9,
      dozenPrice: 0.8,
      varieties: [
        {
          name: 'Plain',
          type: 'Bagel',
          img: '',
        },
        {
          name: 'Sesame',
          type: 'Bagel',
          img: '',
        },
        {
          name: 'Poppy',
          type: 'Bagel',
          img: '',
        },
        {
          name: 'Onion',
          type: 'Bagel',
          img: '',
        },
        {
          name: 'Everything',
          type: 'Bagel',
          img: '',
        },
        {
          name: 'Garlic',
          type: 'Bagel',
          img: '',
        },
        {
          name: 'Salt',
          type: 'Bagel',
          img: '',
        },
        {
          name: '100% Whole Wheat',
          type: 'Bagel',
          img: '',
        },
        {
          name: 'Cinnamon-Raisin',
          type: 'Bagel',
          img: '',
        },
        {
          name: 'Everything on Whole Wheat',
          type: 'Bagel',
          img: '',
        },
      ],
    },
    cream_cheeses: [
      {
        name: 'Plain',
        type: 'Cream Cheese',
        img: '',
        sizes: { bagel: 2.15, tub: 3.35 },
      },
      {
        name: 'Neufchâtel',
        type: 'Cream Cheese',
        img: '',
        desc: '(a plain cc with 1/3 less fat)',
        sizes: { bagel: 2.5, tub: 3.7 },
      },
      {},
    ],
    egg_items: [],
    salads_sides: [],
    sandwiches: [],
  };

  constructor() {}

  ngOnInit(): void {}
}

class Item {
  name: string;
  type: string;
  img: string;
  desc?: string;
  sizes?: any[];
  constructor() {
    this.name = '';
    this.type = '';
    this.img = '';
  }
}
