import { Component, NgModule } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { TextLogoComponent } from "../text-logo/text-logo.component";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
  imports: [
    FormsModule,
    TextLogoComponent,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
  ],
  standalone: true,
})
export class RegisterComponent {
  validateForm: FormGroup<{
    email: FormControl<string>;
    name: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
  }>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.validateForm = this.fb.group({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required]),
    }) as FormGroup<{
      email: FormControl<string>;
      password: FormControl<string>;
      name: FormControl<string>;
      confirmPassword: FormControl<string>;
    }>;
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log("submit", this.validateForm.value);
      this.register();
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  register(): void {
    const { email, password, name, confirmPassword } = this.validateForm.value;
    this.authService
      .register(
        email as string,
        password as string,
        name as string,
        confirmPassword as string
      )
      .subscribe(
        (response) => {
          localStorage.setItem("token", response.token);
          this.router.navigate(["/weather"]);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
