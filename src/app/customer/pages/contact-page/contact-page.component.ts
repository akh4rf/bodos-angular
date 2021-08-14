import { Component, OnInit } from '@angular/core';
import { HTTPRequestService } from 'src/app/shared/services/http-request.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  form: FormData = new FormData();
  submitted = false;
  error = false;
  loading = false;

  handleSubmit() {
    // Turn on loading animation
    this.loading = true;
    // Post data to DB
    this.http
      .post(
        this.http.getPHPBaseURL() + 'contact/process-form.php',
        JSON.stringify(this.form)
      )
      .subscribe((result) => {
        if (result['Message'] == 'Successfully submitted contact info!') {
          this.submitted = true;
        } else {
          this.error = true;
        }
        // Turn off loading animation
        this.loading = false;
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
