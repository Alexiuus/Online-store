import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {isEmptyPassword, isEqualPassword, isValidPassword} from './verifyData';

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

  isErrorPassword(password : any, vPassword : any) : boolean {
    const isPristinePassword : boolean = password?.pristine?? false;
    const isPristineVPassword : boolean = vPassword?.pristine?? false;

    return !(isPristinePassword || isPristineVPassword) && (isEmptyPassword(password) || 
            !isEqualPassword(password, vPassword) || 
            !isValidPassword(password));
  }
  
  getErrorPassword(password : any, vPassword : any) : String {
    if (isEmptyPassword(password)) return 'Empty passsword';
    else if (!isValidPassword(password)) return 'invalid password';
    else if (!isEqualPassword(password, vPassword)) return 'different passwords';
  
    return '';
  }

  isErrorEmail(email : any) : boolean{
    return email?.valid || email?.pristine;
  }

  getErrorEmail(email : any) : string {
    if (email?.errors?.['required']) return 'empty email';
    else if (email?.errors?.['email']) return 'invalid email';

    return '';
  }
  
  isErrorName(fName : any, lName : any) : boolean {
    return (fName?.valid && lName?.valid) || fName?.pristine || lName?.pristine;
  }

  getErrorName(fName : any, lName : any) : string {
    const fNameRequired = fName?.errors?.['required']?? true;
    const lNameRequired = fName?.errors?.['required']?? true;

    if(fNameRequired || lNameRequired) return 'empty Name';
    else if (fName?.errors?.['fName'] || lName?.errors?.['lName']) return 'invalid Name';

    return '';
  }

  isErrorUsername(username : any) : boolean {
    return username?.valid || username?.pristine;
  }

  getErrorUsername(username : any) : string {
    if(username?.errors?.['required']) return 'empty username';
    else if(username?.errors?.['username']) return 'invalid username';

    return '';
  }

  sendDataRegister(){
    console.log("Registrando")
    this.isRegister = true;
  }
}
