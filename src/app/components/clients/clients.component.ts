import {Component, OnInit, ViewChild} from '@angular/core';
import {ClientListComponent} from "./client-list/client-list.component";
import {ClientAddComponent} from "./client-add/client-add.component";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  @ViewChild("list") listCmp: ClientListComponent;
  @ViewChild("add") addCmp: ClientAddComponent;

  constructor() {
  }

  ngOnInit() {
    console.log("ngOnInit() ClientsComponent");
    this.addCmp.onUpsertedClient.subscribe(() => {
        this.listCmp.updateViewList();
        // console.log(client)
      }
    );
  }


}
