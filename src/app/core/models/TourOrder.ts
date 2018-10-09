export class TourOrder {
  name: string;
  beginDate: Date;
  movingMethod: string;
  registeeAmount: number;
  customerName: string;
  contactAddress: string;
  contactPhone: string;

  constructor(
    name: string,
    beginDate: Date,
    movingMethod: string,
    registeeAmount: number,
    customerName: string,
    contactAddress: string,
    contactPhone: string
  ) {
      this.name = name;
      this.beginDate = beginDate;
      this.movingMethod = movingMethod;
      this.registeeAmount = registeeAmount;
      this.customerName = customerName;
      this.contactAddress = contactAddress;
      this.contactPhone = contactPhone;
  }

}
export class Tour{
  id:number;
  name:string;
  price:number;

  constructor(id:number, name:string, price:number){
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

export class MovingMethod{
  id:number;
  name:string;

  constructor(id:number, name:string){
    this.id = id;
    this.name = name;
  }
}
