// src/app/app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { AuthGuard } from "./guards/auth.guard";
import { AuthService } from "./services/auth.service";
import { WeatherService } from "./services/weather.service";
import { WeatherComponent } from "./weather/weather.component";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzInputModule } from "ng-zorro-antd/input";

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NzLayoutModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard, AuthService, WeatherService],
})
export class AppModule {}
