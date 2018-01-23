import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../shared/services/auth.service";
import { LoginData } from "../../../shared/models/login-data.model";
import { TokenService } from "../../../shared/services/token.service";

@Component({
  selector: 'ngs-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private _auth: AuthService, private _tokenService: TokenService, private _router: Router) {
    if (this._auth.isAuthenticated()) {
      this._router.navigateByUrl('/admin/dashboard');
    }
  }

  onLogin(payload: LoginData) {
    this._auth.login(payload).subscribe(response => {
      this._tokenService.setToken(response['token']);
      this._router.navigateByUrl('/admin/dashboard')
    });
  }
}
