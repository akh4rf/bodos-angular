class Bagel {
  img!: string;
  x_coord?: number;
  y_coord?: number;
}

export class BagelOrbit {
  sideLength!: number;
  bagelSize!: number;
  isActive!: boolean;
  bagels!: Array<Bagel>;
}
