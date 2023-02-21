import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Product, ProductsExampleList } from '../../example/ProductsExample';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  name_product: string = '';
  cards: any;
  urlSubscription?: Subscription;

  constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.urlSubscription = this.route.params.subscribe( params => {
      if (typeof(params['filter']) === 'undefined' || params['filter'] === '') {
        this.name_product = '';
        this.router.navigate(['home']);
      }
      else {
        this.name_product = params['filter'];
      }
      this.updateProductList();
    })
  }

  ngOnDestroy(): void {
    this.urlSubscription?.unsubscribe();
  }

  updateProductList() {
    this.cards = this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
      map(({ matches }) => {
        if (matches) {
          return ProductsExampleList.filter(({ name }: Product) => {
            return name.toLowerCase().includes(this.name_product.toLowerCase());
          }).map( product =>
            ({
              id: product.id,
              title: product.name,
              link: product.image,
              type: product.type,
              price: product.price,
              rows: 1,
              cols: 2
            })
          )
        }
  
        return ProductsExampleList.filter(({ name }: Product) => {
          return name.toLowerCase().includes(this.name_product.toLowerCase());
        }).map( product =>
          ({
            id: product.id,
            title: product.name,
            link: product.image,
            type: product.type,
            price: product.price,
            rows: 1,
            cols: 1
          })
        )
      })
    );
  }

  onClickProduct(id_product : number) {
    this.router.navigate([`home/product/${id_product}`]);
  }
}
