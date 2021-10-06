import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { InfoComponent } from './componentes/info/info.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { TablaKiosComponent } from './componentes/tabla-kios/tabla-kios.component';
import { CardComponent } from './componentes/card/card.component';
import { KioskosComponent } from './pages/kioskos/kioskos.component';
import { MapaPagComponent } from './pages/mapa-pag/mapa-pag.component';
import { SharedModule } from '../shared/shared.module';
import { VerKioskoPagComponent } from './pages/ver-kiosko-pag/ver-kiosko-pag.component';



@NgModule({
  declarations: [
    HomeComponent,
    PortadaComponent,
    CarruselComponent,
    InfoComponent,
    MapaComponent,
    TablaKiosComponent,
    CardComponent,
    KioskosComponent,
    MapaPagComponent,
    VerKioskoPagComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    PortadaComponent,
    CarruselComponent,
    MapaComponent,
    TablaKiosComponent,
    CardComponent,
    KioskosComponent,
    MapaPagComponent
  ]
})
export class BebidasModule { }
