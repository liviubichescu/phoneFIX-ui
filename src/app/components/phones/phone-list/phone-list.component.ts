import {Component, OnInit} from '@angular/core';
import {PhoneDTO} from "../../../shared-services/phone-service/phoneDTO.model";
import {PhoneService} from "../../../shared-services/phone-service/phone.service";
import {ClientService} from "../../../shared-services/client-service/client.service";
import {ClientDTO} from "../../../shared-services/client-service/clientDTO.model";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import "rxjs-compat/add/operator/map";

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phonesListData: PhoneDTO[] = [];
  client : ClientDTO = new ClientDTO();
  name : string;


  constructor(private phoneService: PhoneService,
              private clientService: ClientService,
              private router: Router) {
  }

  ngOnInit() {
    this.getPhones();
  }

  getPhones() {
    this.phoneService.getPhones().subscribe(
      phone => this.phonesListData = phone
    )
  }

  goToClient(id: number): void {
    this.router.navigate(['/client/detail', id])
  }

  // convertIdToClientName(id: number) {
  //   console.log("convertIdToClientName()")
  //   this.clientService.getClient(id).map( res => {
  //     console.log("res.firstname = " + res.firstname);
  //     this.name = res.firstname;
  //   });
  //
  //   return this.name;
  // }
}
