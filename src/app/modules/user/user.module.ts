import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from 'src/app/components/register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import { LoginComponent } from 'src/app/components/login/login.component';
@NgModule({
  declarations: [
    UserComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    
    UserRoutingModule,
    NgbCollapseModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    CommonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [UserComponent]
})
export class UserModule { }
