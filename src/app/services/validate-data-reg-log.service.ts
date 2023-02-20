import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateDataRegLogService {

  constructor() { }

  private isValidPassword(password : any) : boolean {
    const passwordValue : string = password.value?? '';
    
    const passwordRegex : RegExp = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    const passwordCheck : boolean = passwordRegex.test(passwordValue);
  
    return passwordCheck;
  }
  
  private isEqualPassword(password : any, vPassword : any) : boolean{
    const passwordValue : string = password.value?? '';
    const vPasswordValue : string = vPassword.value?? '';
  
    return (passwordValue === vPasswordValue);
  }
  
  private isEmptyPassword(password : any) : boolean {
    const isPasswordRequired : boolean = password?.errors?.['required']?? false;
  
    return isPasswordRequired;
  }

  isErrorPassword(password : any, vPassword : any) : boolean {
    const isPristinePassword : boolean = password?.pristine?? false;
    const isPristineVPassword : boolean = vPassword?.pristine?? false;

    return !(isPristinePassword || isPristineVPassword) && (this.isEmptyPassword(password) || 
            !this.isEqualPassword(password, vPassword) || 
            !this.isValidPassword(password));
  }

  getErrorPassword(password : any, vPassword : any) : String {
    if (this.isEmptyPassword(password)) return 'Empty passsword';
    else if (!this.isValidPassword(password)) return 'invalid password';
    else if (!this.isEqualPassword(password, vPassword)) return 'different passwords';
  
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
}
