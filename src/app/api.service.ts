import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {


  getShortLinks(link: string) {
    
  }

  constructor(private http: HttpClient) {}
}
