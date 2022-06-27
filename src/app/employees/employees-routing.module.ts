import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesDeatilsComponent } from './employees-deatils/employees-deatils.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesDeatilsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
