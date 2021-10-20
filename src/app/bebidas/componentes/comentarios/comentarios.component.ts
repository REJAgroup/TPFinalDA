import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from '../../interfaces/comentario.inteface';
import { BebidasService } from '../../services/bebidas.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})

export class ComentariosComponent implements OnInit {
  
  @Input() comentario : Comentario[] = [] ;
  
  comment :  Comentario = {
    comentario: '',
    calificacion: '',
    id : '',
  }
  

  constructor(private __bebidasService : BebidasService) { }

  ngOnInit(): void {
    this.mostrar();
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
