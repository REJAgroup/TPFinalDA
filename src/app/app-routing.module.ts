import {NgModule} from "@angular/core";
import { PorMarcaComponent } from "./bebidas/pages/por-marca/por-marca.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
    {
        path: "",
        component: PorMarcaComponent,
        pathMatch: 'full'
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
