import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PortadaComponent } from './portada/portada.component';



@NgModule({
  declarations: [
    NavComponent,
    MenuComponent,
    CarouselComponent,
    PortadaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    MenuComponent,
    CarouselComponent,
    PortadaComponent
  ]
})
export class SharedModule { }
