import { Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { WeatherComponent } from "./weather/weather.component";

export const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "weather", component: WeatherComponent, canActivate: [AuthGuard] },
];
