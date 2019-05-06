
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PhoneDTO} from "./phoneDTO.model";
import {Injectable} from "@angular/core";

@Injectable()
export class PhoneService {

  phonesURL: string = environment.MyURL + "/Phones/";

  constructor(private http: HttpClient) {
  }

  getPhone(id: number): Observable<PhoneDTO> {
    return this.http.get<PhoneDTO>(this.phonesURL + "GetOnePhone/" + id);
  }

  getPhones(): Observable<PhoneDTO[]> {
    return this.http.get<Array<PhoneDTO>>(this.phonesURL + "GetPhones");
  }

  addPhone(phone: PhoneDTO): Observable<PhoneDTO> {
    return this.http.post<PhoneDTO>(this.phonesURL + "AddPhone", phone);
  }

  deletePhone(id: number): Observable<PhoneDTO> {
    return this.http.delete<PhoneDTO>(this.phonesURL + "DeletePhone/" + id);
  }

  updatePhone(phone: PhoneDTO): Observable<PhoneDTO> {
    return this.http.put<PhoneDTO>(this.phonesURL + "UpdatePhone/" + phone.clientID, phone);
  }

  getPhoneByClientID(id:number):Observable<PhoneDTO[]>{
    return  this.http.get<Array<PhoneDTO>>(this.phonesURL + "GetClientPhones/"+id);
  }


}
