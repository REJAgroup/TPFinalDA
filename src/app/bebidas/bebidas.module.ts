import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { InfoPagComponent } from './pages/info-pag/info-pag.component';
import { InfoComponent } from './componentes/info/info.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { TablaKiosComponent } from './componentes/tabla-kios/tabla-kios.component';
import { RouterModule } from '@angular/router';
import { ComponentContactoComponent } from './componentes/component-contacto/component-contacto.component';


@NgModule({
  declarations: [
    ComponentContactoComponent,
    HomeComponent,
    PortadaComponent,
    CarruselComponent,
    InfoPagComponent,
    InfoComponent,
    MapaComponent,
    TablaKiosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    PortadaComponent,
    CarruselComponent,
    InfoPagComponent,
    InfoComponent,
    MapaComponent,
    TablaKiosComponent,
    ComponentContactoComponent
  ]
})
export class BebidasModule { }
