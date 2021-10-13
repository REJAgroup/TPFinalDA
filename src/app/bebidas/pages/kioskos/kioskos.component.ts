import { Component, OnInit } from '@angular/core';
import { Kiosko } from '../../interfaces/kiosko.inteface';
import { BebidasService } from '../../services/bebidas.service';

@Component({
  selector: 'app-kioskos',
  templateUrl: './kioskos.component.html',
  styleUrls: ['./kioskos.component.scss']
})
export class KioskosComponent implements OnInit {

  kioskos : Kiosko[] = [];  

  constructor(private __bebidasService : BebidasService) { }

  ngOnInit(): void {
    this.__bebidasService.mostrarKioskios().subscribe(kioskos => {
    this.kioskos=kioskos
    });
  }

}
