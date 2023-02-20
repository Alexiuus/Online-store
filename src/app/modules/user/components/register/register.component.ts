import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ValidateDataRegLogService } from 'src/app/services/validate-data-reg-log.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  /* registration form data */
  formUser = new FormGroup({
    username: new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    vPassword : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    phone : new FormControl(''),
    fName : new FormControl('', Validators.required),  
    lName : new FormControl('', Validators.required),
  });
  
  isRegister : boolean = false;
  urlImagelike : string = 'https://static.vecteezy.com/system/resources/previews/010/142/101/original/check-mark-icon-sign-symbol-design-free-png.png';

  constructor(public validate : ValidateDataRegLogService){}
  
  /* get's registration data */
  
  get email(){
    return this.formUser.get('email');
  }

  get username(){
    return this.formUser.get('username');
  }

  get password(){
    return this.formUser.get('password');
  }

  get vPassword(){
    return this.formUser.get('vPassword');
  }

  get fName(){
    return this.formUser.get('fName');
  }

  get lName(){
    return this.formUser.get('lName');
  }

  sendDataRegister(){
    console.log("Registrando")
    this.isRegister = true;
  }
}
