import { Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { WelcomeComponent } from "./pages/welcome/welcome.component";
import { WeatherComponent } from "./pages/weather/weather.component";
export const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "weather", component: WeatherComponent, canActivate: [AuthGuard] },
  { path: "home", component: WelcomeComponent, canActivate: [AuthGuard] },
];
