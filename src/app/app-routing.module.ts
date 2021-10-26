import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { HomeInicioComponent } from "./kioskos/pages/home-inicio/home-inicio.component";
import { HomeComponent } from "./kioskos/pages/home/home.component";
import { ErrorPagComponent } from "./shared/error-pag/error-pag.component";


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
      path: "",
      component: HomeComponent,
    },
    {
      path: "404",
      component: ErrorPagComponent,
    },
    {
      path: '**',
      redirectTo: '404',
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
 