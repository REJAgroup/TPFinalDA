import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { CrudComponent } from "./bebidas/pages/crud/crud.component";
import { HomeComponent } from "./bebidas/pages/home/home.component";
import { KioskosComponent } from "./bebidas/pages/kioskos/kioskos.component";
import { MapaPagComponent } from "./bebidas/pages/mapa-pag/mapa-pag.component";
import { VerKioskoPagComponent } from "./bebidas/pages/ver-kiosko-pag/ver-kiosko-pag.component";
import { ErrorPagComponent } from "./shared/error-pag/error-pag.component";

const routes: Routes = [
    {
      path: "",
      component: HomeComponent,
    },
    {
      path: "auth",
      loadChildren: () => import('./auth/auth.module'). then (m => m.AuthModule)
    },
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
 