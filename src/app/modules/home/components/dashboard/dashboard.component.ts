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
        return [
          { title: ProductsExampleList[0].name, cols: 1, rows: 1, link: ProductsExampleList[0].image, id: ProductsExampleList[0].id },
          { title: ProductsExampleList[1].name, cols: 1, rows: 1, link: ProductsExampleList[1].image, id: ProductsExampleList[1].id },
          { title: ProductsExampleList[2].name, cols: 1, rows: 1, link: ProductsExampleList[2].image, id: ProductsExampleList[2].id },
          { title: ProductsExampleList[3].name, cols: 1, rows: 1, link: ProductsExampleList[3].image, id: ProductsExampleList[3].id },
          { title: ProductsExampleList[4].name, cols: 1, rows: 1, link: ProductsExampleList[4].image, id: ProductsExampleList[4].id }
        ];
      }

      return [
        { title: ProductsExampleList[0].name, cols: 1, rows: 1, link: ProductsExampleList[0].image, id: ProductsExampleList[0].id  },
        { title: ProductsExampleList[1].name, cols: 1, rows: 1, link: ProductsExampleList[1].image, id: ProductsExampleList[1].id  },
        { title: ProductsExampleList[2].name, cols: 1, rows: 1, link: ProductsExampleList[2].image, id: ProductsExampleList[2].id  },
        { title: ProductsExampleList[3].name, cols: 1, rows: 1, link: ProductsExampleList[3].image, id: ProductsExampleList[3].id  },
        { title: ProductsExampleList[4].name, cols: 1, rows: 1, link: ProductsExampleList[4].image, id: ProductsExampleList[4].id  }
      ];
    })
  );

  onClickProduct(id_product : number){
    this.productSelect.Set_id_product(id_product);
    this.router.navigate(['/product/2']);
  }

  constructor(private breakpointObserver: BreakpointObserver, private productSelect : ProductService, private router: Router) {}
}
