import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StateService {
  private userDetailsSubject = new BehaviorSubject<any>(
    this.getUserDetailsFromLocalStorage()
  );
  userDetails$ = this.userDetailsSubject.asObservable();

  setUserDetails(userDetails: any) {
    this.userDetailsSubject.next(userDetails);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }

  private getUserDetailsFromLocalStorage() {
    const userDetails = localStorage.getItem("userDetails");
    return userDetails ? JSON.parse(userDetails) : null;
  }
}
