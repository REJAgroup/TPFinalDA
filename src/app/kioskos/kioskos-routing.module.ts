import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { KioskosComponent } from './pages/kioskos/kioskos.component';
import { MapaPagComponent } from './pages/mapa-pag/mapa-pag.component';
import { VerKioskoPagComponent } from './pages/ver-kiosko-pag/ver-kiosko-pag.component';
import { CrudComponent } from './pages/crud/crud.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeInicioComponent } from './pages/home-inicio/home-inicio.component';
import { LoginGuard } from '../shared/guards/LoginGuards';
import { AdminGuard } from '../shared/guards/AdminGuards';


const routes : Routes = [
  {
    path:'',
    component: HomeComponent, 
    children:[
      {
        path: "",
        component: HomeInicioComponent,
      },
      {
        path: "kioscos",
        component: KioskosComponent,
      },
      {
        path: "mapa",
        component: MapaPagComponent,
      },
      {
        path: "kiosko/:id",
        component: VerKioskoPagComponent,
      },
      {
        path: "admin",
        component:CrudComponent,
        canActivate: [LoginGuard, AdminGuard]
      },
      {
        path: '**',
        redirectTo: 'inicio',
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
  ],
  providers: [
    LoginGuard,
    AdminGuard
  ]
})
export class KioskosRoutingModule { }
