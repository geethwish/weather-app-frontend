import axios from "axios";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { ToastrService } from "ngx-toastr";
@Injectable({
  providedIn: "root",
})
export class AxiosService {
  private axiosInstance = axios.create({
    baseURL: environment.API_URL,
    timeout: 10000,
  });

  constructor(private router: Router, private toastr: ToastrService) {
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
        if (error.response) {
          switch (error.response.status) {
            case 400:
              this.toastr.error("Bad Request", "Error 400", { timeOut: 5000 });
              break;
            case 401:
              localStorage.clear();
              this.router.navigate(["/login"]);
              this.toastr.error("Unauthorized", "Error 401", { timeOut: 5000 });
              break;
            case 403:
              this.toastr.error("Forbidden", "Error 403", { timeOut: 5000 });
              break;
            case 404:
              this.toastr.error("Not Found", "Error 404", { timeOut: 5000 });
              break;
            case 500:
              this.toastr.error("Internal Server Error", "Error 500", {
                timeOut: 5000,
              });
              break;
            default:
              this.toastr.error(
                `Error: ${error.response.statusText}`,
                `Error ${error.response.status}`,
                { timeOut: 5000 }
              );
              break;
          }
        } else {
          this.toastr.error("Network Error", "Error", { timeOut: 5000 });
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
