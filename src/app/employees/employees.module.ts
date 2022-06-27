import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesDeatilsComponent } from './employees-deatils/employees-deatils.component';


@NgModule({
  declarations: [
    EmployeesDeatilsComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
