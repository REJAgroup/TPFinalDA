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

  buscarKiosko(termino: string): Observable<Kiosko[]> {
  const url = `${this.apiUrl}/name/${termino}`;
  return this.http.get<Kiosko[]>(url);
  }



 
  agregarKiosko(kiosko:Kiosko): Observable<Kiosko>{
    return this.http.post<Kiosko>(`${this.apiUrl}`, kiosko);
  }

  editarKiosko(kiosko:Kiosko): Observable<Kiosko>{
    return this.http.put<Kiosko>(`${this.apiUrl}/${kiosko.id}`, kiosko);
  }
  
  eliminarKiosko(id:string|undefined): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);

  }
}