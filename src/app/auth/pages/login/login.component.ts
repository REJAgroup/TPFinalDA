import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioDTO } from '../interfaces/Usuario.interface';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private authService:AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required
        ]
      ],
      password: [
        null,
        [
          Validators.required]
      ]
    })
  }

  ngOnInit(): void {
    console.log("Entre al login");
    
  }

  login() {
    console.log(this.form.value.name)
    console.log(this.form.value.password)
    this.authService.login(this.form.value.name).subscribe(usuarios => {
      console.log(usuarios);
      if (usuarios) {
        usuarios.map(usuario => {
          if (usuario.name === this.form.value.name) {
            if (usuario.password === this.form.value.password) {
              let usuarioDTO:UsuarioDTO = usuario;
              delete usuarioDTO.password
              localStorage.setItem('usuario',JSON.stringify(usuarioDTO))
              this.router.navigate(['/kioskos/admin'])
            }
          }
        })
      } else {
        //mostras error usuario
      }
    })
  }  
  

  }


