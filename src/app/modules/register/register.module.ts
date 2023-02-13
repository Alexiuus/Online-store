import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPasswordDirective } from './error-password.directive';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    RegisterComponent,
    ErrorPasswordDirective
  ],
  imports: [
    ReactiveFormsModule,
    RegisterRoutingModule,
    NgbCollapseModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [RegisterComponent]
})
export class RegisterModule { }
