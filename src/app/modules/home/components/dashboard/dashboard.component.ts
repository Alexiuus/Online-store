import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ProductsExampleList } from '../../example/ProductsExample';
import { Product } from '../../interfaces/Products';
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
              title: product.name,
              cols: 2,
              rows: 1,
              link: product.image
            })
          )
        }
  
        return ProductsExampleList.filter(({ name }: Product) => {
          return name.toLowerCase().includes(this.name_product.toLowerCase());
        }).map( product =>
          ({
            title: product.name,
            cols: 1,
            rows: 1,
            link: product.image
          })
        )
      })
    );
  }

}
