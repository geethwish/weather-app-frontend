import { Component, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { TextLogoComponent } from "../text-logo/text-logo.component";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
  imports: [FormsModule, TextLogoComponent],
  standalone: true,
})
export class RegisterComponent {
  username: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService.register(this.username, this.password).subscribe(
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
