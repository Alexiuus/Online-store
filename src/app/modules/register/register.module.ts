import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    RegisterComponent
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
