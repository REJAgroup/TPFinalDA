import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';


@NgModule({
  declarations: [
    HomeComponent,
    PortadaComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent,
    PortadaComponent,
    CarruselComponent
  ]
})
export class BebidasModule { }
