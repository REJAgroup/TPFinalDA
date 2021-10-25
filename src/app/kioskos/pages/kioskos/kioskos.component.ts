import { Component, OnInit } from '@angular/core';
import { NavComponent } from 'src/app/shared/nav/nav.component';
import { Kiosko } from '../../interfaces/kiosko.inteface';
import { KioskosService } from '../../services/kioskos.service';

@Component({
  selector: 'app-kioskos',
  templateUrl: './kioskos.component.html',
  styleUrls: ['./kioskos.component.scss']
})
export class KioskosComponent implements OnInit {

  kioskos : Kiosko[] = [];  


  constructor(private __kioskosService : KioskosService) { }

  ngOnInit(): void {
    this.__kioskosService.mostrarKioskos().subscribe(kioskos => {
    this.kioskos=kioskos
    });
  }



}
