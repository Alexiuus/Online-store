import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsExampleList, Product } from '../../example/ProductsExample';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  product : Product = ProductsExampleList[0];
  isMobile : boolean = false;
  private paramsRouteSubscription : any;
  private windowSubscription : any

  constructor(private _route:ActivatedRoute, private windowObserver: BreakpointObserver) { }

  ngOnInit() {
    /* route parameters */
    this.paramsRouteSubscription = this._route.params.subscribe((params : Params) =>{
      const id_product : number = parseInt(params['id_product']) ;
      this.product = ProductsExampleList.find(elem => elem.id === id_product)?? ProductsExampleList[0];
    });
    
    /* check if the screen is mobile */
    const customQuery : string = '(max-width: 768px)';
    this.windowSubscription = this.windowObserver.observe([customQuery]).subscribe(
      result => this.isMobile = result.matches
    )
  }

  ngOnDestroy() {
    this.paramsRouteSubscription.unsubscribe();
    this.windowSubscription.unsubscribe();
}
}
