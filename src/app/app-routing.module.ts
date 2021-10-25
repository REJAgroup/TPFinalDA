import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { HomeInicioComponent } from "./kioskos/pages/home-inicio/home-inicio.component";

const routes: Routes = [
    {
      path: "auth",
      loadChildren: () => import('./auth/auth.module'). then (m => m.AuthModule)
    },
    {
      path: "kioskos",
      loadChildren: () => import('./kioskos/kioskos.module'). then (m => m.KioskosModule)
    },
    {
      path: "inicio",
      component: HomeInicioComponent,
    },
    {
      path: '**',
      redirectTo: 'inicio',
    }  
]

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  
  })
  export class AppRoutingModule {
  }
 