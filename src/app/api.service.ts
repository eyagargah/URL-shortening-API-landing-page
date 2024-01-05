import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://cleanuri.com/api/v1/shorten';
 
  private options = {
    method: 'GET',
    hostname: 'ismaelc-bitly.p.rapidapi.com',
    port: null,
    path: '/v3/shorten?login=%3CREQUIRED%3E&apikey=%3CREQUIRED%3E&longUrl=http%3A%2F%2Fwww.mashape.com',
    headers: {
      'X-RapidAPI-Key': '9ae7f59565mshff3b8efdd1ab6a8p109485jsnc113a018920a',
      'X-RapidAPI-Host': 'ismaelc-bitly.p.rapidapi.com'
    }
  };

  getShortLinks(link: string) {
   return this.http.request(this.options)
  }

  constructor(private http: HttpClient) {}
}
