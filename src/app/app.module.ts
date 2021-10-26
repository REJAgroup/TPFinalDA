import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { KioskosModule } from './kioskos/kioskos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    KioskosModule,
    AppRoutingModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
