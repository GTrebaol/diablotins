import { Component } from "@angular/core";
import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: 'ngs-logout',
  template: ''
})
export class LogoutComponent {
  constructor(_auth: AuthService) {
    _auth.logout();
  }
}
