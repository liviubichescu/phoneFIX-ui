import {Component, EventEmitter, OnInit} from '@angular/core';
import {ClientService} from "../../../shared-services/client-service/client.service";
import {ClientDTO} from "../../../shared-services/client-service/clientDTO.model";


@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  client: ClientDTO = new ClientDTO();
  onUpsertedClient: EventEmitter<ClientDTO> = new EventEmitter<ClientDTO>();
  display_form = false;

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
  }

  saveClient() {
    this.clientService.saveClient(this.client).then(rsp => {
      this.client = rsp;
      console.log("(1) -> client from saveClient() = " +this.client.firstname);
      this.onUpsertedClient.emit(JSON.parse(JSON.stringify(rsp)));
    }, err => {
      alert("Something went wrong");
    });
  }

  openAddForm() {
    this.display_form = true;
  }
  closeAddForm() {
    this.display_form = false;
  }
  clear() {
    this.client.firstname ='';
    this.client.lastname ='';
    this.client.adress ='';
    this.client.email ='';
    this.client.contactNumber ='';
  }
}
