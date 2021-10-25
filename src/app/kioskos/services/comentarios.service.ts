import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../interfaces/comentario.inteface';

@Injectable({
    providedIn: 'root'
  })
  
export class ComentariosService {

    constructor(private http: HttpClient) { };
  
    private apiComentariosUrl : string = 'https://614ba83ee4cc2900179eb18b.mockapi.io/comentarios';
  
    mostrarComment(): Observable <Comentario[]>{
      return this.http.get<Comentario[]> (this.apiComentariosUrl);
    }
      
    agregarComentario(comentario:Comentario): Observable<Comentario>{
      return this.http.post<Comentario>(`${this.apiComentariosUrl}`, comentario);
    }
  }