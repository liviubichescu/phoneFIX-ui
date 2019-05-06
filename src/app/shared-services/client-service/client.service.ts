import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClientDTO} from "./clientDTO.model";
import {Observable} from "rxjs";
import "rxjs-compat/add/operator/map";
import {environment} from "../../../environments/environment";

@Injectable()
export class ClientService {

  clientsURL: string = environment.MyURL + "Client/";

  constructor(private http: HttpClient) {
  }

  getClients(filter: string): Observable<ClientDTO[]> {
    return this.http.get<Array<ClientDTO>>(this.clientsURL + "getClients?filter=" + filter);
  }

  getClient(id: number):Observable<ClientDTO> {
    return this.getClients("").map(clients => clients.find(client => client.clientID === id));
  }

  saveClient(client: ClientDTO): Promise<ClientDTO> {
    return this.http.post<ClientDTO>(this.clientsURL + "PostClient", client).toPromise();
  }

  updateClient(client: ClientDTO) {
    const url = `${this.clientsURL + "Put/"}/${client.clientID}`;

    return this.http.put<ClientDTO>(url, client);

  }

  deleteClient(id: number) {
    return this.http.delete(this.clientsURL + "Delete/" + id);
  }









  // getClients(filter: string, skip: number, take: number) {
  //   console.log('getClients() from service: ' + this.httpClient.get<ClientListDTO>(
  //     this.clientsUrl + '?filter=' + filter + '&skip=' + skip + '&take=' + take));
  //   return this.httpClient.get<ClientListDTO>(this.clientsUrl + '?filter=' + filter + '&skip=' + skip + '&take=' + take).toPromise();
  // }


}
