import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'linked-btn',
  templateUrl: './linked-btn.component.html',
  styleUrls: ['./linked-btn.component.css'],
})
export class LinkedBtnComponent implements OnInit {
  @Input() classes!: string;
  @Input() styles!: string;
  @Input() dest!: string;

  constructor() {}

  ngOnInit(): void {}
}
