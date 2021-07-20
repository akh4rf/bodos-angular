export class Link {
  name!: string;
  href!: string;
  isActive?: boolean;
}

export class Navigation {
  links!: Array<Link>;
}
