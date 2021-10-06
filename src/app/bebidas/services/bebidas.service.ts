import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Kiosko} from '../interfaces/kiosko.inteface';

@Injectable({
  providedIn: 'root'
})

export class BebidasService {

  constructor(private http: HttpClient) { };

  private apiUrl:string = 'https://614ba83ee4cc2900179eb18b.mockapi.io/kioskos';

  mostrarKioskios (): Observable <Kiosko[]>{
   return this.http.get<Kiosko[]> (this.apiUrl);
}

  verKioskio (id:string): Observable <Kiosko>{
  return this.http.get<Kiosko> (`${this.apiUrl}/${id}`);
}

}