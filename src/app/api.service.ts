import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://cleanuri.com/api/v1/shorten';

  getShortLinks(link: string) {
    const data = { url: link };
    return this.http.post(this.apiUrl, data);
  }

  constructor(private http: HttpClient) {}
}
