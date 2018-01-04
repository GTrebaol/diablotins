import "rxjs/add/operator/do";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CanActivateChild } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable()
export class LoginGuard implements CanActivateChild {

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['admin/login']);
      return false;
    }
    return true;
  }

  constructor(public auth: AuthService, public router: Router) {
    console.log("login guard");
  }

}
