import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { KioskosComponent } from './pages/kioskos/kioskos.component';
import { MapaPagComponent } from './pages/mapa-pag/mapa-pag.component';
import { VerKioskoPagComponent } from './pages/ver-kiosko-pag/ver-kiosko-pag.component';
import { CrudComponent } from './pages/crud/crud.component';
import { HomeComponent } from './pages/home/home.component';


const routes : Routes = [
  {
    path:'',
    component: HomeComponent, 
    children:[
      {
        path: "kioskos",
        component: KioskosComponent,
      },
      {
        path: "mapaPag",
        component: MapaPagComponent,
      },
      {
        path: "kiosko/:id",
        component: VerKioskoPagComponent,
      },
      {
        path: "admin",
        component:CrudComponent,
      }
    ],
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class KioskosRoutingModule { }
