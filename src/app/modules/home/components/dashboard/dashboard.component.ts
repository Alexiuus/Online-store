import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ProductsExampleList } from '../../example/ProductsExample';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return  ProductsExampleList.map(
          (elem) => ({ title: elem.name, cols: 1, rows: 1, link: elem.image, id: elem.id})
        );
      }

      return ProductsExampleList.map(
        (elem) => ({title: elem.name, cols: 1, rows: 1, link: elem.image, id: elem.id})
      );
    })
  );

  onClickProduct(id_product : number){
    this.router.navigate([`/product/${id_product}`]);
  }

  constructor(private breakpointObserver: BreakpointObserver, private productSelect : ProductService, private router: Router) {}
}
