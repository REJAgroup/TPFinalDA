import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BebidasService {

  constructor(private http: HttpClient) { };

  private apiUrl:string = 'https://614ba83ee4cc2900179eb18b.mockapi.io/bebidas';

}
