import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [NgbCollapseModule],
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username : String = "";
  password : String = "";
  email : String = "";
  phone : String = "";
  realName : String = "";
  public isCollapsed = true;
  
}
