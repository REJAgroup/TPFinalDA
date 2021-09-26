import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    NavComponent,
    MenuComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    MenuComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
