import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { AUTH_ROUTES } from "./auth.routes";
import { LoginComponent } from "./containers/login.component";
import { LogoutComponent } from "./containers/logout.component";
import { LoginFormComponent } from "./components/login-form.component";

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    LoginFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(AUTH_ROUTES)
  ]
})
export class AuthModule {
}
