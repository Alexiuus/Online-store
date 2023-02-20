import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ValidateDataRegLogService } from 'src/app/services/validate-data-reg-log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  /* registration form data */
  formUser = new FormGroup({
    username: new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });
  
  isRegister : boolean = false;
  urlImagelike : string = 'https://static.vecteezy.com/system/resources/previews/010/142/101/original/check-mark-icon-sign-symbol-design-free-png.png';

  constructor(public validate : ValidateDataRegLogService){}

  get username(){
    return this.formUser.get('username');
  }

  get password(){
    return this.formUser.get('password');
  }

  sendDataRegister(){
    this.isRegister = true;
  }
}
