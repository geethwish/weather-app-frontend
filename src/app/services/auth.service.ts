import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { from, Observable } from "rxjs";
import { AxiosService } from "./axios.service";
import { StateService } from "./state.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private axiosService: AxiosService,
    private stateService: StateService
  ) {}

  login(email: string, password: string): Observable<any> {
    return from(this.axiosService.post("/auth/login", { email, password }));
  }

  register(
    email: string,
    password: string,
    name: string,
    confirmPassword: string
  ): Observable<any> {
    return from(
      this.axiosService.post("/auth/register", {
        email,
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

  // fetch user details
  getUserDetails(): Observable<any> {
    return from(this.axiosService.get("/auth/user"));
  }

  fetchUserDetails(): void {
    this.getUserDetails().subscribe(
      (userDetails) => {
        this.stateService.setUserDetails(userDetails.data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
