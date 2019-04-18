import { Component, OnInit } from '@angular/core';
import {
  EmployeeService,
  Employee,
} from '../../../services/employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  // employees =

  employees: Employee[];

  constructor(private employeeService: EmployeeService) {
    this.employeeService = employeeService;
  }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.employeeFiltred = this.employees;
  }

  employeeFiltred = [];

  onSearch(value: string) {
    this.employeeFiltred = this.employees.filter(emp =>
      emp.name.toLowerCase().includes(value.toLowerCase())
    );
    console.log('Output: ', value, this.employeeFiltred);
  }
}
