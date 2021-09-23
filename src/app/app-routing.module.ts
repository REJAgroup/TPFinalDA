import { Router, Routes } from "@angular/router";
import { PorMarcaComponent } from "./bebidas/pages/por-marca/por-marca.component";

const routes: Routes = [
    {
        path: "",
        component: PorMarcaComponent,
        pathMatch: 'full'
    }
]