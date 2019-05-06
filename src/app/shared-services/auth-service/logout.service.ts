import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

// logout service
@Injectable()
export class LogoutService {

  constructor(public authentication: AuthService) {
  }

  logout() {
    // stergem tokenul de la server
    this.clearToken();
    // verificam daca logout s-a facut cu success
    this.checkForSuccessFullLogout();
  }

  checkStatus(): boolean{
    // daca avem token returnam true(apare logout)
    if (this.authentication.getToken() == null){
      return true;
    }
    return false;
  }

  // delete token from local storage on logout
  clearToken() {
    localStorage.removeItem("token");
  }

  // check if token was deleted and display message
  checkForSuccessFullLogout() {
    if (this.authentication.getToken() == null) {
      alert("You have successfully loget out!")
    }
  }

}
