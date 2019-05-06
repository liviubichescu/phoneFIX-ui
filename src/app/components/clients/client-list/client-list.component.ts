import {Component, OnInit} from '@angular/core';
import {ClientDTO} from '../../../shared-services/client-service/clientDTO.model';
import {ClientService} from '../../../shared-services/client-service/client.service';
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: ClientDTO[] = [];
  filter = '';
  error: string;
  count: number;
  page = 0;
  take = 10;
  selectedClient: ClientDTO;

  constructor(private clientService: ClientService,
              private router: Router) {
  }

  ngOnInit() {
    this.getClients();
  }

  // face update la lista de clienti dupa adaugarea unui client
  updateViewList() {
    console.log("updateViewList()");
    this.getClients();
  }

  // aduce toti clientii din baza de date
  getClients() {
    this.clientService.getClients(this.filter).subscribe(
      rsp => this.clients = rsp,
      err => this.error = err);
  }

  // sterge un client din baza de date
  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe(
      success => {
        this.getClients();
      }
    );
    // if (confirm("Are you sure you want to delete user " + this.selectedClient.firstname + " " + this.selectedClient.lastname + "?")) {
    //   this.clientService
    //     .deleteClient(id)
    //     .subscribe(
    //       success => {
    //         this.getClients();
    //         console.log(this.error = "Utilizatorul a fost sters cu succes!!!")
    //       },
    //       error => {
    //         console.log(this.error = "Delete could not be completed, please try again!!!")
    //       });
    // }
  }

  search() {
    this.getClients();
  }

  // onSelect(client: ClientDTO): void {
  //   this.selectedClient = client;
  // }

  gotoDetail(client: ClientDTO): void {
    console.log("gotoDetail() -> ClientListComponent");
    this.router.navigate(['/client/detail', client.clientID]);
  }


  prevPage() {
    this.page--;
    this.getClients();
  }

  nextPage() {
    this.page++;
    this.getClients();
  }




  // getClients() {
  //   this.clientService.getClients(this.filter, this.page * this.take, this.take)
  //     .then(rsp => {
  //         console.log('this is the clients: ' + this.clients);
  //         this.clients = rsp.clientList;
  //         console.log('this is the clients after assign from rsp: ' + this.clients);
  //         console.log('this is rsp.clientList: ' + rsp.clientList);
  //         this.count = rsp.count;
  //       },
  //       error => {
  //         this.errorMessage = <any>error;
  //       }
  //     );
  // }
}
