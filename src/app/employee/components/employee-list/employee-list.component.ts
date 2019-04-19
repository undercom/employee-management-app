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
  initialEmployees: Employee[];

  searchStream$ = new Subject<string>();
  devStream$ = new Subject<boolean>();

  constructor(private employeeService: EmployeeService) {
    this.employeeService = employeeService;
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(emp => {
      this.employees = emp;
      this.initialEmployees = this.employees;
    });

    const filteredSearch = this.searchStream$.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      filter(searchText => searchText.length > 2 || searchText.length === 0)
    );

    const filteredDev$ = this.devStream$.pipe(startWith(false));

    combineLatest(filteredSearch, filteredDev$).subscribe(
      ([searchTer, onlyDevs]) => {
        this.onSearch(searchTer, onlyDevs);
      }
    );
  }

  onSearch(value: string = '', onlyDevs: boolean) {
    if (!this.initialEmployees) {
      return;
    }
    console.log('Filtering employee', value, onlyDevs);
    this.employees = this.initialEmployees.filter((employee: Employee) => {
      const matchName =
        value.length === 0 ||
        employee.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
      const isDev = !onlyDevs || employee.position.includes('dev');
      return matchName && isDev;
    });
  }

  // onSearch(value: string) {
  //   this.employees = this.employees.filter(emp =>
  //     emp.name.toLowerCase().includes(value.toLowerCase())
  //   );
  //   console.log('Output: ', value, this.employees);
  // }
}
