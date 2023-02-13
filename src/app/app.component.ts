import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OnlineStore';
  nombre = '';
  error : any;

  receiveData(data: any) {
    console.log(data);
  }
}
