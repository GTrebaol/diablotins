import { Routes } from "@angular/router";
import { LoginComponent } from "./containers/login.component";
import { LogoutComponent } from "./containers/logout.component";

export const AUTH_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '**', redirectTo: 'login'}
];
