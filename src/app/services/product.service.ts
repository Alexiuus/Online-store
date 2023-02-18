import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private id_product : number = 0;
  constructor() { }

  Get_id_product(){
    console.log("get", this.id_product);
    return this.id_product;
  }
  Set_id_product(id_new : number){
    console.log("set", id_new);
    this.id_product = id_new;
    console.log("set", this.id_product);
  }
}
