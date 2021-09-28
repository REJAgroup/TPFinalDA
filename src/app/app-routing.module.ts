import {NgModule} from "@angular/core";
import { MenuComponent } from "./shared/menu/menu.component";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from "./bebidas/pages/home/home.component";


const routes: Routes = [
    {
      path: "",
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: "menu",
      component: MenuComponent,
      pathMatch: 'full'
    },
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
