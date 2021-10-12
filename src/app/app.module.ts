import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BebidasModule } from './bebidas/bebidas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComentariosComponent } from './bebidas/componentes/comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ComentariosComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    BebidasModule,
    AppRoutingModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
