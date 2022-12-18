import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private http:HttpClient) {}
  getShorterLinks(){
    return this.http.get('https://api.shrtco.de/v2/');
  }
}
