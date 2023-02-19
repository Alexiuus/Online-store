import { Component, Input, OnChanges } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ProductsExampleList } from '../../example/ProductsExample';
import { Product } from '../../interfaces/Products';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnChanges{

  @Input() search: string = "";
  cards: any;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnChanges(): void {
    this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          return ProductsExampleList.filter(({ name }: Product) => {
            return name.toLowerCase().includes(this.search.toLowerCase());
          }).map( product =>
            ({
              title: product.name,
              cols: 1,
              rows: 1,
              link: product.image
            })
          )
        }
  
        return ProductsExampleList.filter(({ name }: Product) => {
          return name.toLowerCase().includes(this.search.toLowerCase());
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
