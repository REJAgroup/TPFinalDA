import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { InfoComponent } from './componentes/info/info.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { TablaKiosComponent } from './componentes/tabla-kios/tabla-kios.component';
import { KioskosComponent } from './pages/kioskos/kioskos.component';
import { MapaPagComponent } from './pages/mapa-pag/mapa-pag.component';



@NgModule({
  declarations: [
    HomeComponent,
    PortadaComponent,
    CarruselComponent,
    InfoComponent,
    MapaComponent,
    TablaKiosComponent,
    KioskosComponent,
    MapaPagComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    PortadaComponent,
    CarruselComponent,
    MapaComponent,
    TablaKiosComponent,
    KioskosComponent,
    MapaPagComponent
  ]
})
export class BebidasModule { }
