import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

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

  get username(){
    return this.formUser.get('username');
  }

  get password(){
    return this.formUser.get('password');
  }

  isErrorPassword(password : any) : boolean {
    const isPristinePassword : boolean = password?.pristine?? false;

    return !(isPristinePassword) && this.isEmptyPassword(password);
  }
  private isEmptyPassword(password : any) : boolean {
    const isPasswordRequired : boolean = password?.errors?.['required']?? false;

    return isPasswordRequired ;
  }
  
  getErrorPassword(password : any) : String {
    if (this.isEmptyPassword(password)) return 'Empty passsword';
  
    return '';
  }

  isErrorUsername(username : any) : boolean {
    return username?.valid || username?.pristine;
  }

  getErrorUsername(username : any) : string {
    if(username?.errors?.['required']) return 'Empty username';
    else if(username?.errors?.['username']) return 'Invalid username';

    return '';
  }

  sendDataRegister(){
    this.isRegister = true;
  }
}
