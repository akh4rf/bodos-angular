import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-link',
  templateUrl: './navbar-link.component.html',
  styleUrls: ['./navbar-link.component.css'],
})
export class NavbarLinkComponent implements OnInit {
  @Input() link!: string;
  @Input() isActive!: boolean;
  @Input() type!: string;

  constructor() {}

  ngOnInit(): void {}
}
