import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Usuario} from "../interfaces/Usuario.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl :string = "https://614ba83ee4cc2900179eb18b.mockapi.io/usuarios ";
  constructor(private http: HttpClient) { }

  login(usuario:string):Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/?name=${usuario}`)
  }
}