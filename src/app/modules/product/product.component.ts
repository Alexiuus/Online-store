import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
  isMobile : boolean = false;

  constructor(private _route:ActivatedRoute, private windowObserver: BreakpointObserver) { }

  ngOnInit() {
    /* route parameters */
    this._route.params.subscribe((params : Params) =>{
      this.id_product = parseInt(params['id_product']) ;
      this.product = ProductsExampleList.find(elem => elem.id === this.id_product)?? ProductsExampleList[0];
    });
    
    /* check if the screen is mobile */
    const customQuery = '(max-width: 768px)';
    this.windowObserver.observe([customQuery]).subscribe(
      result => this.isMobile = result.matches
    )
  }
}
