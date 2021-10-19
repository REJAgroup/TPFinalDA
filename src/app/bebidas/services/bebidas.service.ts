import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../interfaces/comentario.inteface';
import {Kiosko} from '../interfaces/kiosko.inteface';

@Injectable({
  providedIn: 'root'
})

export class BebidasService {

  constructor(private http: HttpClient) { };

  private apiKioskosUrl:string = 'https://614ba83ee4cc2900179eb18b.mockapi.io/kioskos';
  private apiComentariosUrl : string = 'https://614ba83ee4cc2900179eb18b.mockapi.io/comentarios';


  //  KIOSKOS
  mostrarKioskos (): Observable <Kiosko[]>{
   return this.http.get<Kiosko[]> (this.apiKioskosUrl);
  }
  verKioskio (id:string): Observable <Kiosko>{
  return this.http.get<Kiosko> (`${this.apiKioskosUrl}/${id}`);
  }

  buscarKiosko(termino: string): Observable<Kiosko[]> {
  const url = `${this.apiKioskosUrl}/name/${termino}`;
  return this.http.get<Kiosko[]>(url);
  }

  agregarKiosko(kiosko:Kiosko): Observable<Kiosko>{
    return this.http.post<Kiosko>(`${this.apiKioskosUrl}`, kiosko);
  }

  editarKiosko(kiosko:Kiosko): Observable<Kiosko>{
    return this.http.put<Kiosko>(`${this.apiKioskosUrl}/${kiosko.id}`, kiosko);
  }
  
  eliminarKiosko(id:string|undefined): Observable<any>{
    return this.http.delete<any>(`${this.apiKioskosUrl}/${id}`);
  }

  // COMENTARIOS

  mostrarComment(): Observable <Comentario[]>{
    return this.http.get<Comentario[]> (this.apiComentariosUrl);
  }


}