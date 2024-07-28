import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { TextLogoComponent } from "../../components/text-logo/text-logo.component";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    TextLogoComponent,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
  ],
  standalone: true,
})
export class LoginComponent {
  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.validateForm = this.fb.group({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    }) as FormGroup<{
      email: FormControl<string>;
      password: FormControl<string>;
    }>;
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log("submit", this.validateForm.value);
      this.login();
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  login(): void {
    const { email, password } = this.validateForm.value;

    // Ensure userName and password are strings
    if (typeof email === "string" && typeof password === "string") {
      this.authService.login(email, password).subscribe(
        (response) => {
          if (
            response.data.token !== undefined &&
            response.data.token !== null &&
            response.data.token !== ""
          ) {
            localStorage.setItem("token", response.data.token);

            // Fetch user details when login success
            this.authService.fetchUserDetails();
            this.router.navigate(["/home"]);
          } else {
            console.log("login failed");
          }
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Username or password is incorrect");
    }
  }
}
