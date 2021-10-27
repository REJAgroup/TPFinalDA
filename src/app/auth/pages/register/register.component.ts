import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
 form:FormGroup;
 
  constructor(private __authService:AuthService, private formBuilder:FormBuilder, private router:Router) {
  this.form = this.formBuilder.group({
   name:[
     null,
     [
       Validators.required, 
       
     ]
   ],

   password:[
    null,
    [
      Validators.required, 
      
    ]
  ]

  })

   }

  ngOnInit(): void {
  }

registrar(){
  //this.form.value.password = atob(this.form.value.password)
  console.log(this.form.value.password);
  console.log(atob(this.form.value.password));
  this.__authService.agregarRegistro(this.form.value).subscribe(resp =>{
if (resp){
  this.router.navigate(["/auth/login"])
}
})


}
}
