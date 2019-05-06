import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../shared-services/auth-service/auth.service';
import {LogoutService} from "../../shared-services/auth-service/logout.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private router: Router,
              private authService: AuthService,
              private store: LogoutService) {
  }


  ngOnInit() {
  }

  login() {
    this.authService.login(this.username,this.password).then(
      rsp => {
        console.log("Received username ="+this.username);
        console.log("Received password ="+this.password);
        this.router.navigateByUrl('/clients');
      },
      err => {
        console.log("Error in login() from LoginComponent")
      });
    // setInterval(_ => {
    //   console.log("Test");
    // }, 1000);
  }
}
