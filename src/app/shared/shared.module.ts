import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ErrorPagComponent } from './error-pag/error-pag.component';


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    ErrorPagComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    ErrorPagComponent
  ]
})
export class SharedModule { }
