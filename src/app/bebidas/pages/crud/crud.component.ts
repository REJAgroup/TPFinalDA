import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { Kiosko } from '../../interfaces/kiosko.inteface';
import { BebidasService } from '../../services/bebidas.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
   kioskos : Kiosko [] = [];

   kiosko:Kiosko = {
     id : '',
     name : '',
     avatar : '',
     descripcion: ''
   }


  constructor(private __bebidasService : BebidasService) { }
  
  ngOnInit(): void {
    this.mostrar();

  }


 mostrar(){this.__bebidasService.mostrarKioskios().subscribe(kiosko=>{
   this.kioskos = kiosko;
 })

}

guardar(){
  if(this.kiosko.id){
    this.__bebidasService.editarKiosko(this.kiosko).subscribe(kiosko => {
      this.mostrar();
    })
  }
  else{
    this.__bebidasService.agregarKiosko(this.kiosko).subscribe(kiosko => {
      this.mostrar();
    })
  }
}

eliminar(id:string){
  this.__bebidasService.eliminarKiosko(id!).subscribe(kiosko => {
    if(kiosko = 100){
      this.mostrar()
    }
  })
}


}
