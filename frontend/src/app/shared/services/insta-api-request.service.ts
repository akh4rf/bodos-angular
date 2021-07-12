import { Injectable } from '@angular/core';
import { HTTPRequestService } from './http-request.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstaAPIRequestService {
  base_url = 'https://graph.instagram.com/';
  access_token =
    'IGQVJYTWN4NVZAva01PbFo2ZAWYyVmRWUUZAKRUdnYkpXZAmZA6enpQWFBhQnZAjYm10b1FPZAm5jNzVReUdOVGNOWG16T2x4OUxuOEU1NDV4cHhETzBJMUo5a0FFcmlLbWFaYmt3dWNYdkRCaGF2ZAGdGTWc5MwZDZD';

  values: [];

  getMediaFromUser(user_id: string): Observable<InstaUserMediaResponse> {
    return this.httpRequest.get(
      this.base_url +
        user_id +
        '/media?fields=caption,media_type,permalink,timestamp,username,media_url&access_token=' +
        this.access_token
    );
  }

  constructor(private httpRequest: HTTPRequestService) {
    this.values = [];
  }
}

interface InstaMediaData {
  caption: string;
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  username: string;
}

interface InstaUserMediaResponse {
  data: Array<InstaMediaData>;
  paging: {
    cursors: {
      before: string;
      after: string;
    };
    next: string;
  };
}
