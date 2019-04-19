import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  EmployeeService,
  Employee,
} from '../../../services/employee/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  employee: Employee;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap);
    this.employeeService.getEmployeeId(id).subscribe(emp => {
      this.employee = emp;
    });
    console.log(this.employee);
  }

  save(value: any) {
    console.log('s');
  }
}
