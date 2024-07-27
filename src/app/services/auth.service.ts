import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { from, Observable } from "rxjs";
import { AxiosService } from "./axios.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private axiosService: AxiosService
  ) {}

  login(username: string, password: string): Observable<any> {
    return from(this.axiosService.post("/login", { username, password }));
  }

  register(
    username: string,
    password: string,
    name: string,
    confirmPassword: string
  ): Observable<any> {
    return from(
      this.axiosService.post("/register", {
        username,
        password,
        name,
        confirmPassword,
      })
    );
  }
  logout(): void {
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem("token");
  }
}
