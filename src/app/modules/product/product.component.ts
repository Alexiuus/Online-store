import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsExampleList, Product } from '../home/example/ProductsExample';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private id_product : number = 0;
  product : Product = ProductsExampleList[0];
  isMobile = window.innerWidth <= 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth <= 768;
  }
  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params : Params) =>{
      this.id_product = parseInt(params['id_product']) ;
      this.product = ProductsExampleList.find(elem => elem.id === this.id_product)?? ProductsExampleList[0];
    });
  }
}
