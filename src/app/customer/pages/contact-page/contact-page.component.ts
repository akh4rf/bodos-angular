import { Component, OnInit } from '@angular/core';
import { HTTPRequestService } from 'src/app/shared/services/http-request.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  form: FormData = new FormData();

  handleSubmit() {
    this.http
      .post(
        this.http.getPHPBaseURL() + 'contact/process-form.php',
        JSON.stringify(this.form)
      )
      .subscribe((result) => {
        console.log(result);
      });
  }

  constructor(private http: HTTPRequestService) {}

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
