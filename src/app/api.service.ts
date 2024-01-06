import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class ApiService {

  async getShortLinks(link: string) {
    const encodedParams = new URLSearchParams();
    encodedParams.set('url', link);

    const options = {
      method: 'POST',
      url: 'https://shorturl9.p.rapidapi.com/functions/api.php',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '9ae7f59565mshff3b8efdd1ab6a8p109485jsnc113a018920a',
        'X-RapidAPI-Host': 'shorturl9.p.rapidapi.com',
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.url);
      return response.data.url
    } catch (error) {
      console.error(error);
    }
  }

  constructor(private http: HttpClient) {}
}
