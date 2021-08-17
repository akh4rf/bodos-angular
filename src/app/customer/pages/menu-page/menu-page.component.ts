import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css'],
})
export class MenuPageComponent implements OnInit {
  MENU: Menu = {
    bagels: {
      bulkDiscount: 0.1,
      items: [
        {
          name: 'Plain',
          type: 'Bagel',
          img: '',
          price: 0.9,
        },
        {
          name: 'Sesame',
          type: 'Bagel',
          img: '',
          price: 0.9,
        },
        {
          name: 'Poppy',
          type: 'Bagel',
          img: '',
          price: 0.9,
        },
        {
          name: 'Onion',
          type: 'Bagel',
          img: '',
          price: 0.9,
        },
        {
          name: 'Everything',
          type: 'Bagel',
          img: '',
          price: 0.9,
        },
        {
          name: 'Garlic',
          type: 'Bagel',
          img: '',
          price: 0.9,
        },
        {
          name: 'Salt',
          type: 'Bagel',
          img: '',
          price: 0.9,
        },
        {
          name: '100% Whole Wheat',
          type: 'Bagel',
          img: '',
          price: 0.9,
        },
        {
          name: 'Cinnamon-Raisin',
          type: 'Bagel',
          img: '',
          price: 0.9,
        },
        {
          name: 'Everything on Whole Wheat',
          type: 'Bagel',
          img: '',
          price: 0.9,
        },
      ],
    },
    creamCheeses: {
      items: [
        {
          name: 'Plain',
          type: 'Cream Cheese',
          img: '',
          sizes: { bagel: 2.15, eight_oz_tub: 3.35 },
        },
        {
          name: 'Neufchâtel',
          type: 'Cream Cheese',
          img: '',
          desc: '(a plain cc with 1/3 less fat)',
          sizes: { bagel: 2.5, eight_oz_tub: 3.7 },
        },
        {
          name: 'Flavored',
          type: 'Cream Cheese',
          img: '',
          desc: '(Herb, Jalapeno Lime, Walnut Raisin, Olive, Honey Pecan, Blueberry, Vegetable, or Strawberry)',
          sizes: { bagel: 2.5, eight_oz_tub: 3.7 },
        },
        {
          name: 'Lox Spread',
          type: 'Cream Cheese',
          img: '',
          sizes: { bagel: 3.2, eight_oz_tub: 4.1 },
        },
        {
          name: 'Lox and',
          type: 'Cream Cheese',
          img: '',
          sizes: { bagel: 5.6 },
        },
      ],
    },
    spreads: {
      items: [
        {
          name: 'Honey and Butter',
          type: 'Spread',
          img: '',
          sizes: { bagel: 2.0 },
        },
        {
          name: 'Cinnamon Sugar and Butter',
          type: 'Spread',
          img: '',
          sizes: { bagel: 2.0 },
        },
        {
          name: 'Butter or Smart Balance',
          type: 'Spread',
          img: '',
          sizes: { bagel: 1.6 },
        },
        {
          name: 'Peanut Butter',
          type: 'Spread',
          img: '',
          sizes: { bagel: 2.1 },
        },
        {
          name: 'Strawberry Preserves',
          type: 'Spread',
          img: '',
          sizes: { bagel: 1.8 },
        },
        {
          name: 'PB & J',
          type: 'Cream Cheese',
          img: '',
          sizes: { bagel: 2.6 },
        },
      ],
    },
    eggItems: {
      items: [],
    },
    salads: {
      items: [],
    },
    sides: {
      items: [],
    },
    beverages: {
      items: [],
    },
  };

  constructor() {}

  ngOnInit(): void {}
}

class Item {
  name: string;
  type: string;
  img: string;
  price?: number;
  desc?: string;
  sizes?: any;
  constructor() {
    this.name = '';
    this.type = '';
    this.img = '';
    this.price = 0;
  }
}

class ItemCollection {
  bulkDiscount?: number;
  items: Item[];
  constructor() {
    this.items = [];
  }
}

class Menu {
  bagels: ItemCollection;
  creamCheeses: ItemCollection;
  spreads: ItemCollection;
  eggItems: ItemCollection;
  salads: ItemCollection;
  sides: ItemCollection;
  beverages: ItemCollection;
  constructor() {
    this.bagels = new ItemCollection();
    this.creamCheeses = new ItemCollection();
    this.spreads = new ItemCollection();
    this.eggItems = new ItemCollection();
    this.salads = new ItemCollection();
    this.sides = new ItemCollection();
    this.beverages = new ItemCollection();
  }
}
