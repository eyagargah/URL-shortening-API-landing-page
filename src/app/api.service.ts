import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getShortLinks(link: string) {
    let baseUrl = 'https://api.shrtco.de/v2/shorten?url=';

    return this.http.get(baseUrl + link);
  }

  constructor(private http: HttpClient) {}
}
