import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

const routes : Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        redirectTo: 'login'
      },
    ],
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BebidasRoutingModule { }
