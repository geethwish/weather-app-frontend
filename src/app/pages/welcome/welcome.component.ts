import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { TextLogoComponent } from "../../components/text-logo/text-logo.component";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import {
  NzDropdownMenuComponent,
  NzDropDownModule,
} from "ng-zorro-antd/dropdown";
import { ChatboxComponent } from "../../components/chatbox/chatbox.component";
import { StateService } from "../../services/state.service";
import { getFirstLetters } from "../../utils/stringUtils";

@Component({
  selector: "app-welcome",
  standalone: true,
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
  imports: [
    CommonModule,
    RouterModule,
    TextLogoComponent,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    NzAvatarModule,
    NzDropDownModule,
    ChatboxComponent,
  ],
})
export class WelcomeComponent implements OnInit {
  isCollapsed: boolean = false;
  menu: NzDropdownMenuComponent | null | undefined;
  userDetails:
    | {
        email: string;
        name: string;
        _id: string;
      }
    | undefined;
  constructor(private router: Router, private stateService: StateService) {}

  handleLogout() {
    localStorage.clear();
    this.router.navigate(["/"]);
  }
  getFirstLetters(text: string): string {
    return getFirstLetters(text);
  }

  ngOnInit() {
    this.stateService.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      console.log("User Details:", this.userDetails);
    });
  }
}
