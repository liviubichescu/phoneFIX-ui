import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceSheetDTO} from "./serviceSheetDTO";
import {environment} from "../../../../environments/environment";


@Injectable()
export class ServiceSheetService {

  serviceSheetURL: string = environment.MyURL + "ServiceSheets/";

  constructor(private http: HttpClient) {
  }

  getServiceSheet() {
    return this.http.get<ServiceSheetDTO[]>(this.serviceSheetURL + "GetServiceSheets").toPromise();
  }


  saveServiceSheet(clientID, accesories, claimed_defect, phone_description_on_reception, date) {

    const sSheet = {clientID, accesories, claimed_defect, phone_description_on_reception, date};

    return this.http.post<ServiceSheetDTO>(this.serviceSheetURL+ "AddServiceSheet/", sSheet).toPromise();
  }

  // getClientNume(id: number){
  //
  //   return this.http.get<string[]>(this.serviceSheetURL + "GetClientNameByClientId/"+id);
  //
  // }

}
