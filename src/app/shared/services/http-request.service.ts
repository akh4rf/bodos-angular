import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HTTPRequestService {
  getPHPBaseURL() {
    if (
      location.hostname === 'localhost' ||
      location.hostname === '127.0.0.1'
    ) {
      return 'http://localhost:80/';
    } else {
      return 'https://bodos-php.herokuapp.com/';
    }
  }

  get(dest: string): Observable<any> {
    return this.client.get(dest);
  }

  post(dest: string, body: any): Observable<any> {
    return this.client.post<any>(dest, body);
  }

  constructor(private client: HttpClient) {}
}
