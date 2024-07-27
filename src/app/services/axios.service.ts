import axios from "axios";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AxiosService {
  private axiosInstance = axios.create({
    baseURL: environment.API_URL,
    timeout: 10000,
  });

  constructor(private router: Router) {
    // Request interceptor
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token");
          this.router.navigate(["/login"]);
        }
        return Promise.reject(error);
      }
    );
  }

  get(url: string, config = {}) {
    return this.axiosInstance.get(url, config);
  }

  post(url: string, data: any, config = {}) {
    return this.axiosInstance.post(url, data, config);
  }

  put(url: string, data: any, config = {}) {
    return this.axiosInstance.put(url, data, config);
  }

  delete(url: string, config = {}) {
    return this.axiosInstance.delete(url, config);
  }
}
