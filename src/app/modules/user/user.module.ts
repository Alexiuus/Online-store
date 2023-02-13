import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from 'src/app/components/register/register.component';



@NgModule({
  declarations: [
    UserComponent,
    RegisterComponent
  ],
  imports: [
    ReactiveFormsModule,
    UserRoutingModule,
    NgbCollapseModule,
    CommonModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [UserComponent]
})
export class UserModule { }
