import { Component, Input, OnInit } from '@angular/core';
import { Kiosko } from '../../interfaces/kiosko.inteface';
import { BebidasService } from '../../services/bebidas.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from '../../interfaces/comentario.inteface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-ver-kiosko-pag',
  templateUrl: './ver-kiosko-pag.component.html',
  styleUrls: ['./ver-kiosko-pag.component.scss']
})
export class VerKioskoPagComponent implements OnInit {

    verKioskos! : Kiosko;
    comentarios : Comentario[] = [] ;
    formCreateKiosko : FormGroup | undefined = undefined;

    comment :  Comentario = {
      comentario: '',
      calificacion: '',
      id : '',
    }

  constructor(private __bebidasService : BebidasService, private kiosko : ActivatedRoute, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  
    this.kiosko.params.pipe(switchMap(({id}) => 
    this.__bebidasService.verKioskio(id))).subscribe(respID => {
    this.verKioskos = respID; 
    });
    
    this.__bebidasService.mostrarComment().subscribe(comen => {
    this.comentarios=comen
      });
      
      
      this.formCreateKiosko = this.formBuilder.group({
        "comentario": new FormControl(),
        "calificacion": new FormControl(),
     
      });

  }

  show(){
    console.log(this.comentarios);
  }
  
  crearComentario(){
    this.__bebidasService.agregarComentario(this.comment).subscribe(creacoment =>{
      this.mostrar();
      console.log(creacoment);
      })
  
  }
  
  mostrar(){this.__bebidasService.mostrarComment().subscribe(comentario=>{
    // this.comentario = comentario;
     console.log(comentario);
   })
   }

}
