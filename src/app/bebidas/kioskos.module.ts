import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { CardKiosComponent } from './componentes/card-kios/card-kios.component';
import { KioskosComponent } from './pages/kioskos/kioskos.component';
import { MapaPagComponent } from './pages/mapa-pag/mapa-pag.component';
import { SharedModule } from '../shared/shared.module';
import { VerKioskoPagComponent } from './pages/ver-kiosko-pag/ver-kiosko-pag.component';
import { CrudComponent } from './pages/crud/crud.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { ImgNavComponent } from './componentes/img-nav/img-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KioskosRoutingModule } from './kioskos-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    PortadaComponent,
    MapaComponent,
    CardKiosComponent,
    KioskosComponent,
    MapaPagComponent,
    VerKioskoPagComponent,
    CrudComponent,
    ComentariosComponent,
    ImgNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    KioskosRoutingModule
  ],
  exports: [
    HomeComponent,
    PortadaComponent,
    MapaComponent,
    CardKiosComponent,
    KioskosComponent,
    MapaPagComponent,
    VerKioskoPagComponent,
    CrudComponent,
    ComentariosComponent,
    ImgNavComponent
  ]
})
export class KioskosModule { }
