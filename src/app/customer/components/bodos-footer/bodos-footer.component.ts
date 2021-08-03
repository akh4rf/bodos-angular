import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'bodos-footer',
  templateUrl: './bodos-footer.component.html',
  styleUrls: ['./bodos-footer.component.css'],
})
export class BodosFooterComponent implements OnInit {
  @Input() NAVIGATION!: any;
  @Output() updateNav = new EventEmitter<string>();

  /**
   * Tells the parent (CustomerComponent) to update the active link in the navbar
   * when a footer link is clicked.
   */
  handleLinkClick(PATH: string) {
    // Reset active link
    this.updateNav.emit(PATH);
  }

  constructor() {}

  ngOnInit(): void {}
}
