import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bodos-footer',
  templateUrl: './bodos-footer.component.html',
  styleUrls: ['./bodos-footer.component.css'],
})
export class BodosFooterComponent implements OnInit {
  @Input() NAVIGATION!: any;

  constructor() {}

  ngOnInit(): void {}
}
