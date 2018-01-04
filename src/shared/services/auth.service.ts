import { Injectable } from "@angular/core";
import { LoginData } from "../models/login-data.model";
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpRequest } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

const API_URL = environment.apiUrl;


@Injectable()
export class AuthService {
  private _tokenKey: string = 'token';
  private _isLoggedIn: boolean = false;

  constructor(private httpClient: HttpClient) {
  }

  public getToken(): string {
    return localStorage.getItem(this._tokenKey);
  }

  public setToken(token: string) {
    localStorage.setItem(this._tokenKey, token);
  }

  public login(payload: LoginData) {
    this.httpClient.post(API_URL + '/auth', payload).subscribe(response => {
      localStorage.setItem(this._tokenKey, response['token']);
    });
  }

  public logout() {
    localStorage.removeItem(this._tokenKey);
    this._isLoggedIn = false;
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

  cachedRequests: Array<HttpRequest<any>> = [];

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

}
