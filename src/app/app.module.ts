import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BebidasModule } from './bebidas/bebidas.module';
import { ComponentContactoComponent } from './component-contacto/component-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentContactoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    BebidasModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
