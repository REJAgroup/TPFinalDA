import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { InfoPagComponent } from './pages/info-pag/info-pag.component';
import { InfoComponent } from './componentes/info/info.component';


@NgModule({
  declarations: [
    HomeComponent,
    PortadaComponent,
    CarruselComponent,
    InfoPagComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent,
    PortadaComponent,
    CarruselComponent,
    InfoPagComponent,
    InfoComponent
  ]
})
export class BebidasModule { }
