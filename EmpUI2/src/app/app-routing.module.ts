import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { SalaryComponent } from './salary/salary.component';

const routes: Routes = [
  {path:'employee', component: EmployeeComponent},
  {path: 'salary', component: SalaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
