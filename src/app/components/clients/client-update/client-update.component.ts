import {Component, Input, OnInit} from '@angular/core';
import {ClientDTO} from "../../../shared-services/client-service/clientDTO.model";
import {ClientService} from "../../../shared-services/client-service/client.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import "rxjs-compat/add/operator/switchMap";
import {Location} from "@angular/common";

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  @Input() client: ClientDTO;

  constructor(private clientService: ClientService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    console.log("ngOnInit() -> ClientUpdateComponent");
    this.getClient();
  }

  getClient(){
    this.route.params
      .switchMap((params: Params) => this.clientService.getClient(+params['id']))
      .subscribe(client => this.client = client);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.clientService.updateClient(this.client).subscribe( ()=>{
      this.goBack();
      }
    );

  }


  // // update Liviu version
  // updateViewList(client:ClientDTO) {
  //
  //   var idx = this.clients.findIndex(x=> x.clientID == client.clientID);
  //   console.log("my idx = " +idx);
  //   if(!(idx >= 0)) {
  //     this.clients.push(client);
  //   }else {
  //     this.clients[idx] = client;
  //   }
  // }

}
