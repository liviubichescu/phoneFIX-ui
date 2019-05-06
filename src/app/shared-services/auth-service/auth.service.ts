import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthService {

  loginURL: string = environment.MyURL;

  constructor(private http: HttpClient) {
  }

  isAuth() {
    return localStorage.getItem('token') != null;
  }

  getToken() {
    return localStorage.getItem("token");
  }

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  login(username: string, password: string) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    let body = 'grant_type=password&username='+username+'&password='+password;

    return this.http.post<any>(this.loginURL + "login", body, options).toPromise()
      .then(rsp => {
        this.setToken(rsp.access_token);
        // set my login status
        return rsp;
      });
  }
}
