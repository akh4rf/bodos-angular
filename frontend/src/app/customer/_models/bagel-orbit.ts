import { Bagel } from 'src/app/shared/_models/bagel';

class OrbitingBagel extends Bagel {
  // Needed for positioning
  x_coord?: number;
  y_coord?: number;
}

export class BagelOrbit {
  sideLength!: number;
  bagelSize!: number;
  isActive!: boolean;
  bagels!: Array<OrbitingBagel>;
}
