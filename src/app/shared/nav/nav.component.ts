import { Component, OnInit } from '@angular/core';
import { Kiosko } from 'src/app/bebidas/interfaces/kiosko.inteface';
import { BebidasService } from 'src/app/bebidas/services/bebidas.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {

  termino:string = '';
  hayError: boolean = false;
  hayBusqueda: boolean = false;
  kioskos : Kiosko[] = [];  

  constructor(private __bebidasService : BebidasService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.hayError = false;
    this.hayBusqueda = true;
    this.termino = termino;
    console.log("Buenas");
    this.__bebidasService.buscarKiosko(termino).subscribe(resp => {
      console.log(resp);
      this.kioskos = resp;
    }, error => {
      console.error("tuve un error: " + error);
      this.hayError = true;
      this.kioskos = [];
    })
  }

}
