import { Component, OnInit } from '@angular/core';
import { Kiosko } from '../../interfaces/kiosko.inteface';
import { BebidasService } from '../../services/bebidas.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-kiosko-pag',
  templateUrl: './ver-kiosko-pag.component.html',
  styleUrls: ['./ver-kiosko-pag.component.scss']
})
export class VerKioskoPagComponent implements OnInit {

    verKioskos! : Kiosko;  

  constructor(private __bebidasService : BebidasService, private kiosko : ActivatedRoute) { }

  ngOnInit(): void {
    this.kiosko.params.pipe(switchMap(({id}) => 
    this.__bebidasService.verKioskio(id))).subscribe(respID => {
      this.verKioskos = respID; 
    })

  }

}