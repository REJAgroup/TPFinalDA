import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { InfoPagComponent } from './pages/info-pag/info-pag.component';
import { InfoComponent } from './componentes/info/info.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { RouterModule } from '@angular/router';
import { KioskosComponent } from './componentes/kioskos/kioskos.component';
import { BusquedaPagComponent } from './pages/busqueda-pag/busqueda-pag.component';


@NgModule({
  declarations: [
    HomeComponent,
    PortadaComponent,
    CarruselComponent,
    InfoPagComponent,
    InfoComponent,
    MapaComponent,
    KioskosComponent,
    BusquedaPagComponent
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
    KioskosComponent
  ]
})
export class BebidasModule { }
