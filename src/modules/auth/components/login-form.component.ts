import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginData } from "../../../shared/models/login-data.model";

const MIN_PASSWORD_LENGTH = 5;
const USERNAME_VALIDATOR = Validators.compose([Validators.required]);
const PASSWORD_VALIDATOR = Validators.compose([Validators.required, Validators.minLength(MIN_PASSWORD_LENGTH)]);

@Component({
  selector: 'ngs-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {
  @Output() login = new EventEmitter<LoginData>();
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', USERNAME_VALIDATOR),
      password: new FormControl('', PASSWORD_VALIDATOR)
    });
  }

  onSubmit(): void {
    this.login.emit(this.loginForm.value);
  }
}
