import { Component, OnInit } from '@angular/core';
import {LogoutService} from "../../shared-services/auth-service/logout.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public store: LogoutService) { }

  ngOnInit() {
  }



}
