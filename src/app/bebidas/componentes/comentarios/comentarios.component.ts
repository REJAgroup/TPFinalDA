import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Comentario } from '../../interfaces/comentario.inteface';
import { BebidasService } from '../../services/bebidas.service';
@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})

export class ComentariosComponent implements OnInit {
  
  verComentario! : Comentario | undefined ;
  comentario : Comentario[] = [] ;

  constructor(private __bebidasService : BebidasService,private comentarios : ActivatedRoute) { }

  ngOnInit(): void {

    this.comentarios.params.pipe(switchMap(({id}) => 
    this.__bebidasService.verComment(id))).subscribe(respID => {
    this.verComentario = respID;
    console.log(respID);
    })

  }
  
  

}
