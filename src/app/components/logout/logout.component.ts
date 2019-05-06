import { Component, OnInit } from '@angular/core';
import {LogoutService} from "../../shared-services/auth-service/logout.service";
import {AuthService} from "../../shared-services/auth-service/auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private store: LogoutService,
              private authentication: AuthService) { }

  ngOnInit() {
  }



}
