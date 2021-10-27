import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import { UsuarioDTO } from "src/app/auth/pages/interfaces/Usuario.interface";

@Injectable()

export class AdminGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {
    let usuario: UsuarioDTO = JSON.parse(<string>localStorage.getItem('usuario'));
    if (!usuario.admin) {
      this.router.navigate(['/kioskos/admin']);
      return false;
    }
    return true;
  }
}