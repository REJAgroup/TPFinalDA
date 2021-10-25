import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from "./bebidas/pages/home/home.component";
import { ErrorPagComponent } from "./shared/error-pag/error-pag.component";

const routes: Routes = [
    {
      path: "auth",
      loadChildren: () => import('./auth/auth.module'). then (m => m.AuthModule)
    },
    {
      path: "kioskos",
      loadChildren: () => import('./bebidas/kioskos.module'). then (m => m.KioskosModule)
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
 