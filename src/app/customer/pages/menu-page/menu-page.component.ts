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
    sandwiches: {
      items: [
        {
          name: 'Turkey Breast',
          type: 'Sandwich',
          img: '',
          price: 3.95,
        },
        {
          name: 'Smoked Turkey Breast',
          type: 'Sandwich',
          img: '',
          price: 4.05,
        },
        {
          name: 'Ham',
          type: 'Sandwich',
          img: '',
          price: 3.9,
        },
        {
          name: 'Roast Beef',
          type: 'Sandwich',
          img: '',
          price: 4.45,
        },
        {
          name: 'Pastrami',
          type: 'Sandwich',
          img: '',
          price: 4.55,
        },
        {
          name: 'Corned Beef',
          type: 'Sandwich',
          img: '',
          price: 4.55,
        },
        {
          name: 'Sausage',
          type: 'Sandwich',
          img: '',
          desc: 'Pork Patty',
          price: 3.15,
        },
        {
          name: 'Capicola',
          type: 'Sandwich',
          img: '',
          desc: 'Spicy Italian Ham',
          price: 3.9,
        },
        {
          name: 'Salami',
          type: 'Sandwich',
          img: '',
          price: 3.75,
        },
        {
          name: 'BLT',
          type: 'Sandwich',
          img: '',
          desc: 'Bacon, Lettuce, Tomato',
          price: 4.4,
        },
        {
          name: 'Chopped Liver',
          type: 'Sandwich',
          img: '',
          price: 3.85,
        },
        {
          name: 'Liverwurst',
          type: 'Sandwich',
          img: '',
          price: 2.95,
        },
        {
          name: 'Chicken Salad',
          type: 'Sandwich',
          img: '',
          desc: 'We use turkey',
          price: 3.6,
        },
        {
          name: 'Tuna Salad',
          type: 'Sandwich',
          img: '',
          price: 3.45,
        },
        {
          name: 'Shrimp Salad',
          type: 'Sandwich',
          img: '',
          price: 4.75,
        },
        {
          name: 'Egg Salad',
          type: 'Sandwich',
          img: '',
          price: 3.15,
        },
        {
          name: 'Baked Salmon and Whitefish Salad',
          type: 'Sandwich',
          img: '',
          price: 5.9,
        },
        {
          name: 'NoBull',
          type: 'Sandwich',
          img: '',
          desc: 'Locally made lentil-based veggie patty',
          price: 4.0,
        },
        {
          name: 'Tofu',
          type: 'Sandwich',
          img: '',
          desc: 'Herbed & firm, locally made',
          price: 2.75,
        },
      ],
    },
    spreads: {
      items: [
        {
          name: 'Honey and Butter',
          type: 'Spread',
          img: '',
          price: 2.0,
        },
        {
          name: 'Cinnamon Sugar and Butter',
          type: 'Spread',
          img: '',
          price: 2.0,
        },
        {
          name: 'Butter or Smart Balance',
          type: 'Spread',
          img: '',
          price: 1.6,
        },
        {
          name: 'Peanut Butter',
          type: 'Spread',
          img: '',
          desc: 'Crunchy Peanut Butter',
          price: 2.1,
        },
        {
          name: 'Strawberry Preserves',
          type: 'Spread',
          img: '',
          price: 1.8,
        },
        {
          name: 'PB & J',
          type: 'Spread',
          img: '',
          price: 2.6,
        },
        {
          name: 'Hummus',
          type: 'Spread',
          img: '',
          desc: 'Our own',
          price: 2.95,
        },
        {
          name: 'Avocado',
          type: 'Spread',
          img: '',
          desc: 'Chopped and spread',
          price: 3.15,
        },
        {
          name: 'Kalamata Olive Spread',
          type: 'Spread',
          img: '',
          desc: 'Tapenade',
          price: 3.25,
        },
        {
          name: 'Feta Spread',
          type: 'Spread',
          img: '',
          desc: 'Half feta, half cream cheese, our own',
          price: 2.85,
        },
        {
          name: 'Three Cheese',
          type: 'Spread',
          img: '',
          desc: 'Your choice of Swiss, Provolone, Muenster, Cheddar, and/or American',
          price: 3.0,
        },
      ],
    },
    creamCheeses: {
      items: [
        {
          name: 'Plain Cream Cheese',
          type: 'Cream Cheese',
          img: '',
          sizes: { bagel: 2.15, eight_oz_tub: 3.35 },
        },
        {
          name: 'Neufchâtel Cream Cheese',
          type: 'Cream Cheese',
          img: '',
          desc: '(a plain cc with 1/3 less fat)',
          sizes: { bagel: 2.5, eight_oz_tub: 3.7 },
        },
        {
          name: 'Flavored Cream Cheese',
          type: 'Cream Cheese',
          img: '',
          desc: '(Herb, Jalapeno Lime, Walnut Raisin, Olive, Honey Pecan, Blueberry, Vegetable, or Strawberry)',
          sizes: { bagel: 2.5, eight_oz_tub: 3.7 },
        },
        {
          name: 'Lox Spread Cream Cheese',
          type: 'Cream Cheese',
          img: '',
          sizes: { bagel: 3.2, eight_oz_tub: 4.1 },
        },
        {
          name: 'Lox and Cream Cheese',
          type: 'Cream Cheese',
          img: '',
          sizes: { bagel: 5.6 },
        },
      ],
    },

    eggItems: {
      items: [
        {
          name: 'Egg Bagel',
          type: 'Egg Item',
          img: '',
          price: 2.25,
        },
        {
          name: 'Egg Bagel with Ham or Bacon',
          type: 'Egg Item',
          img: '',
          price: 3.45,
        },
        {
          name: 'Egg Bagel with Sausage',
          type: 'Egg Item',
          img: '',
          price: 3.75,
        },
        {
          name: 'Egg Bagel with NoBull (veggie patty)',
          type: 'Egg Item',
          img: '',
          price: 4.4,
        },
        {
          name: 'Deli-Egg Bagel',
          type: 'Egg Item',
          img: '',
          desc: 'A sandwich-sized "omelette" filled with our own mixture of cheeses and deli meats and served on a bagel.',
          price: 3.75,
        },
      ],
    },
    sides: {
      items: [
        {
          name: 'Fruit Cup',
          type: 'Side',
          img: '',
          desc: 'Fresh blueberries, grapes, tangerine, pineapple & melon in a refreshingly sweet lime juice, served in a 5 oz cup',
          price: 2.25,
        },
        {
          name: 'Potato Chips',
          type: 'Side',
          img: '',
          price: 0.55,
        },
        {
          name: 'Pretzels',
          type: 'Side',
          img: '',
          price: 0.55,
        },
        {
          name: 'Pickle Spear',
          type: 'Side',
          img: '',
          price: 0.25,
        },
      ],
    },
    beverages: {
      items: [
        {
          name: 'Soda',
          type: 'Beverage',
          img: '',
          desc: 'Coke, Diet Coke, Mr. Pibb, Sprite, Coke Zero, Root Beer',
          sizes: { small: 1.2, medium: 1.45, large: 1.65 },
        },
        {
          name: 'Flavored Seltzers',
          type: 'Beverage',
          img: '',
          desc: '(Our own flavors, made with all-natural fruit extracts and a hint of sweetness, in Lemon, Raspberry, Tangerine, or Pomegranate)',
          sizes: { large: 1.45 },
        },
        {
          name: 'Coffee',
          type: 'Beverage',
          img: '',
          desc: '(regular or decaf)',
          sizes: { medium: 2.0, large: 2.4 },
        },
        {
          name: 'Coffee by the Box',
          type: 'Beverage',
          img: '',
          desc: '160 ounces, includes cups, creamers etc.',
          price: 25.0,
        },
        {
          name: 'Hot Tea',
          type: 'Beverage',
          img: '',
          desc: '(black or green)',
          sizes: { large: 1.45 },
        },
        {
          name: 'Iced Tea',
          type: 'Beverage',
          img: '',
          sizes: { medium: 1.6, large: 1.8 },
        },
        {
          name: 'Milk',
          type: 'Beverage',
          img: '',
          desc: '(whole, 2%, nonfat, or chocolate)',
          price: 1.25,
        },
        {
          name: 'Orange Juice',
          type: 'Beverage',
          img: '',
          sizes: { small: 1.75, medium: 2.2, large: 2.95 },
        },
        {
          name: 'Lemonade',
          type: 'Beverage',
          img: '',
          sizes: { small: 1.45, medium: 1.75, large: 2.3 },
        },
        {
          name: 'Bottled Water',
          type: 'Beverage',
          img: '',
          desc: '(Maine\'s "Poland Spring")',
          price: 0.99,
        },
      ],
    },
    soupsAndSalads: {
      items: [
        {
          name: 'Soups of the Day',
          type: 'Soup',
          img: '',
          price: 3.8,
        },
        {
          name: 'Caesar Salad',
          type: 'Salad',
          img: '',
          desc: 'Romaine lettuce, the classic olive oil dressing made from scratch, our own croutons, and Parmesan cheese.  Bold, garlicky, acclaimed. Also available with kale instead of romaine (same price)',
          price: 4.65,
        },
        {
          name: 'Cleo Salad',
          type: 'Salad',
          img: '',
          desc: 'Romaine lettuce tossed with our own honey-mustard vinaigrette, diced tomatoes, and small almond pieces. A lighter, sweeter counterpart to our robust Caesar. Also available with kale instead of romaine (same price)',
          price: 4.65,
        },
        {
          name: 'Turkey Caesar or Turkey Cleo',
          type: 'Salad',
          img: '',
          desc: 'We can add any item that we carry to your salad: ham, avocado, tuna salad, chicken salad, tofu, etc. etc. and more are available',
          price: 7.25,
        },
        {
          name: 'Red Potato Salad',
          type: 'Salad',
          img: '',
          desc: 'Our own, in an olive oil & vinegar base with a mix of fresh herbs, served in a 6 oz tub',
          price: 1.7,
        },
        {
          name: 'Tabouli Salad',
          type: 'Salad',
          img: '',
          desc: 'Our own version of the classic bulghur wheat salad, mixed with parsley, tomatoes, cucumbers, and mint, served in a 8 oz tub',
          price: 1.95,
        },
        {
          name: 'Shoepeg Corn Salad',
          type: 'Salad',
          img: '',
          desc: 'Light, sweet and fresh, with a small hit of cayenne & black pepper heat, served in a 6 oz tub',
          price: 1.85,
        },
      ],
    },
  };

  keyMap = {
    bagels: 'Bagels',
    creamCheeses: 'Cream Cheeses',
    spreads: 'Spreads',
    eggItems: 'Egg Items',
    sandwiches: 'Sandwiches',
    soupsAndSalads: 'Soups & Salads',
    sides: 'Sides',
    beverages: 'Beverages',
  };

  columns = [0, 1];

  resolvePrice(num: any) {
    return '$' + Number.parseFloat(num).toFixed(2);
  }

  unsorted(a: any, b: any): number {
    return 0;
  }

  constructor() {}

  ngOnInit(): void {}
}

interface Item {
  name: string;
  type: string;
  img: string;
  price?: number;
  desc?: string;
  sizes?: any;
}

interface ItemCollection {
  bulkDiscount?: number;
  items: Item[];
}

interface Menu {
  bagels: ItemCollection;
  creamCheeses: ItemCollection;
  spreads: ItemCollection;
  eggItems: ItemCollection;
  sandwiches: ItemCollection;
  soupsAndSalads: ItemCollection;
  sides: ItemCollection;
  beverages: ItemCollection;
}
