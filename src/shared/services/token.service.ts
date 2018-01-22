import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable()
export class TokenService {
  private _tokenKey: string = 'token';

  constructor() {
  }

  public getToken(): string {
    return localStorage.getItem(this._tokenKey);
  }

  public setToken(token: string) {
    localStorage.setItem(this._tokenKey, token);
  }

  public isAuthenticated(): boolean {
    let result: boolean = false;
    const token = localStorage.getItem(this._tokenKey);
    if (token) {
      let jwtHelper: JwtHelperService = new JwtHelperService(this.getToken());
      return !jwtHelper.isTokenExpired(token);
    }
    return result;
  }

}
