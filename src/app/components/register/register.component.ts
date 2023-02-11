import { Component, NgModule } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormsModule, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    NgbCollapseModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgbModule
  ],
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formUser = new FormGroup({
    username: new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    vPassword : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    phone : new FormControl(''),
    fName : new FormControl('', Validators.required),  
    lName : new FormControl('', Validators.required),
  });

  isValidPassword() : boolean {
    const password : string = this.formUser.get('password')?.value ?? '';
    const passwordRegex : RegExp = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    const passwordCheck : boolean = passwordRegex.test(password);

    return passwordCheck;
  }
  
  isEqualPassword() : boolean{
    const password : string = this.formUser.get('password')?.value ?? '';
    const vPassword : string = this.formUser.get('vPassword')?.value ?? '';
    return password === vPassword;
  }

  isEmptyPassword() : boolean {
    const isPasswordRequired : boolean = this.formUser.get('password')?.errors?.['required'];
    const isVPasswordRequired : boolean = this.formUser.get('vPassword')?.errors?.['required'];

    return (isPasswordRequired || isVPasswordRequired);
  }

  isErrorPassword() : boolean {
    const isPristinePassword : Boolean = this.formUser.get('password')?.pristine?? false;
    const isPristineVPassword : boolean = this.formUser.get('vPassword')?.pristine?? false;

    return (isPristinePassword && isPristineVPassword) && 
          (this.isEmptyPassword() || !this.isEmptyPassword() || !this.isValidPassword());
  }

  getErrorPassword() : String {
    if (this.isEmptyPassword()) return 'Empty passsword';
    else if (!this.isValidPassword()) return 'invalid password';
    else if (!this.isEqualPassword()) return 'different passwords';

    return '';
  }
}
