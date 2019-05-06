import {Component, OnInit} from '@angular/core';
import {ServiceSheetService} from "../shared/serviceSheet.service";
import {ServiceSheetDTO} from "../shared/serviceSheetDTO";

@Component({
  selector: 'app-service-sheet-list',
  templateUrl: './service-sheet-list.component.html',
  styleUrls: ['./service-sheet-list.component.css']
})
export class ServiceSheetListComponent implements OnInit {

  serviceSheetsData : ServiceSheetDTO[]=[];
  clientName : string [];

  constructor(private serviceSheet: ServiceSheetService) {
  }


  ngOnInit() {
  this.getServiceSheets();
  }

  getServiceSheets() {
    this.serviceSheet.getServiceSheet().then(rsp => this.serviceSheetsData = rsp);
  }

  // getClientName(id: number){
  //   this.serviceSheet.getClientNume(id).subscribe(rsp=>this.clientName=rsp);
  // }


}
