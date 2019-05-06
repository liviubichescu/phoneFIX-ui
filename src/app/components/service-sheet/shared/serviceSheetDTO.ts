
export class ServiceSheetDTO {

  iD_Service: number;
  clientID: number;
  accesories: string;
  claimed_defect: string;
  phone_description_on_reception: string;
  date: number = Date.now();

}
