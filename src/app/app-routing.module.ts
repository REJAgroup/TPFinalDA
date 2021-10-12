import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from "./bebidas/pages/home/home.component";
import { InfoPagComponent } from "./bebidas/pages/info-pag/info-pag.component";


const routes: Routes = [
    {
      path: "",
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: "infoPag",
      component: InfoPagComponent,
    },
    {
      path: '**',
      redirectTo: ''
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
 