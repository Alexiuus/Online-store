import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  viewProductSelect(idProduct : number){
    console.log('services', idProduct);
  }
}
