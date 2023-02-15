import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ProductsExampleList } from '../../example/ProductsExample';

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
          { title: ProductsExampleList[0].name, cols: 1, rows: 1, link: ProductsExampleList[0].image },
          { title: ProductsExampleList[1].name, cols: 1, rows: 1, link: ProductsExampleList[1].image },
          { title: ProductsExampleList[2].name, cols: 1, rows: 1, link: ProductsExampleList[2].image },
          { title: ProductsExampleList[3].name, cols: 1, rows: 1, link: ProductsExampleList[3].image },
          { title: ProductsExampleList[4].name, cols: 1, rows: 1, link: ProductsExampleList[4].image }
        ];
      }

      return [
        { title: ProductsExampleList[0].name, cols: 1, rows: 1, link: ProductsExampleList[0].image  },
        { title: ProductsExampleList[1].name, cols: 1, rows: 1, link: ProductsExampleList[1].image  },
        { title: ProductsExampleList[2].name, cols: 1, rows: 1, link: ProductsExampleList[2].image  },
        { title: ProductsExampleList[3].name, cols: 1, rows: 1, link: ProductsExampleList[3].image  },
        { title: ProductsExampleList[4].name, cols: 1, rows: 1, link: ProductsExampleList[4].image  }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
