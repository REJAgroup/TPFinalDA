import { Component, OnInit } from '@angular/core';
import { Kiosko } from '../../interfaces/kiosko.inteface';
import { BebidasService } from '../../services/bebidas.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
   kioskos : Kiosko [] = [];

   
  constructor(private __bebidasService : BebidasService) { }
  
  ngOnInit(): void {
    this.mostrar();

  }


 mostrar(){this.__bebidasService.mostrarKioskios().subscribe(kioskos=>{
   this.kioskos = kioskos;
 })

}

}
