import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kiosko } from 'src/app/kioskos/interfaces/kiosko.inteface';
import { KioskosService } from 'src/app/kioskos/services/kioskos.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {

  estoyHome: boolean = true;
  termino:string = '';
  hayError: boolean = false;
  hayBusqueda: boolean = false;
  kioskos : Kiosko[] = [];  

  constructor(private __kioskosService : KioskosService, private router : Router) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.hayError = false;
    this.hayBusqueda = true;
    this.termino = termino;
    console.log("valor", termino);
    this.__kioskosService.buscarKiosko(termino).subscribe(resp => {
      console.log(resp);
      this.kioskos = resp;
    }, error => {
      console.error("tuve un error: " + error);
      this.hayError = true;
      this.kioskos = [];
    })
  }

  mostrarItems(){
    this.estoyHome = true;
  }

  salir() {
    localStorage.removeItem("usuario");
    this.router.navigate([":/:/"])
  }

}