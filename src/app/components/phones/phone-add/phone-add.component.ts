import { Component, OnInit } from '@angular/core';
import {PhoneDTO} from "../../../shared-services/phone-service/phoneDTO.model";
import {PhoneService} from "../../../shared-services/phone-service/phone.service";

@Component({
  selector: 'app-phone-add',
  templateUrl: './phone-add.component.html',
  styleUrls: ['./phone-add.component.css']
})
export class PhoneAddComponent implements OnInit {

  phone: PhoneDTO = new PhoneDTO();

  constructor(private phoneService: PhoneService) { }

  ngOnInit() {
  }

  savePhone(){
    this.phoneService.addPhone(this.phone).subscribe(
      res => this.phone = res
      );
  }

}
