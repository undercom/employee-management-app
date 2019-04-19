import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeNewComponent } from './components/employee-new/employee-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [SharedModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    EmployeeListComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeNewComponent,
  ],
  exports: [
    EmployeeListComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeNewComponent,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class EmployeeModule {}
