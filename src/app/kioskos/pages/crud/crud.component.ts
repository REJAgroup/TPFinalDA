import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Kiosko } from '../../interfaces/kiosko.inteface';
import { KioskosService } from '../../services/kioskos.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
   
  kioskos : Kiosko [] = [];
  formCreateKiosko : FormGroup | undefined = undefined;

   kiosko:Kiosko = {
     id : '',
     name : '',
     avatar : '',
     descripcion: ''
   }

  constructor(private __kioskosService : KioskosService, private formBuilder : FormBuilder) { }
  
  ngOnInit(): void {
    this.mostrar();

    this.formCreateKiosko = this.formBuilder.group({
      "name": new FormControl(),
      "descripcion": new FormControl(),
      "avatar": new FormControl()
    });

  }


  mostrar(){this.__kioskosService.mostrarKioskos().subscribe(kiosko=>{
    this.kioskos = kiosko;

  })
  }

   editar(){
       this.__kioskosService.editarKiosko(this.kiosko).subscribe(kiosko => {
       this.mostrar();
       })
     }  
  

    eliminar(id:string){
      this.__kioskosService.eliminarKiosko(id!).subscribe(kiosko => {
      this.mostrar();
     })
    }


    crearKiosko(){
      //let kioskosss = this.formCreateKiosko?.value;
     //console.log(kioskosss);
      this.__kioskosService.agregarKiosko(this.kiosko).subscribe(kiosko =>{
      this.mostrar();
      console.log(kiosko);
      })
    }

    id(id:string){
      this.__kioskosService.verKioskio(id).subscribe(kiosko => {
        this.kiosko = kiosko;
        });
    }

}
