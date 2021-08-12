import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  form: FormData = new FormData();

  handleSubmit() {
    console.log(this.form);
  }

  constructor() {}

  ngOnInit(): void {}
}

class FormData {
  name: string;
  email: string;
  message: string;
  constructor() {
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
