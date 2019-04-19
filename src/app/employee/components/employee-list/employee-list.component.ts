import { Component, OnInit } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import {
  EmployeeService,
  Employee,
} from '../../../services/employee/employee.service';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  startWith,
} from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  searchStream$ = new Subject<string>();
  devStream$ = new Subject<boolean>();

  constructor(private employeeService: EmployeeService) {
    this.employeeService = employeeService;
  }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
    this.employeeFiltred = this.employees;

    const filteredSearch = this.searchStream$.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      filter(searchText => searchText.length > 2 || searchText.length === 0)
    );

    const filteredDev$ = this.devStream$.pipe(startWith(false));

    combineLatest(filteredSearch, filteredDev$).subscribe(val =>
      console.log(val)
    );
  }

  employeeFiltred = [];

  onSearch(value: string = '', onlyDevs: boolean) {
    console.log('Filtering employee', value, onlyDevs);
    this.employees = this.employees.filter((employee: Employee) => {
      const matchName =
        value.length === 0 ||
        employee.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
      const isDev = !onlyDevs || employee.position.includes('dev');
      return matchName && isDev;
    });
  }

  // onSearch(value: string) {
  //   this.employeeFiltred = this.employees.filter(emp =>
  //     emp.name.toLowerCase().includes(value.toLowerCase())
  //   );
  //   console.log('Output: ', value, this.employeeFiltred);
  // }
}
