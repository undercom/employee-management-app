import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Address {
  street: string;
  number: string;
  city: string;
}

export interface Employee {
  id: string;
  picture: string;
  name: string;
  email: string;
  phone: string;
  address: Address;
  position: string;
}

@Injectable()
export class EmployeeService {
  private _logger: LoggerService;
  private _http: HttpClient;
  private _apiUrl = 'http://localhost:3000/api/employees';
  private defaultUserPicture =
    'https://randomuser.me/api/portraits/thumb/lego/5.jpg';

  constructor(logger: LoggerService, http: HttpClient) {
    this._logger = logger;
    this._http = http;
  }

  getEmployees(): Observable<Employee[]> {
    this._logger.log('Get employees');

    return this._http
      .get<Employee[]>(this._apiUrl)
      .pipe(catchError(this.handleError));
  }

  getEmployeeById(id: string): Observable<Employee> {
    this._logger.log(`Get employee ${id}`);

    return this._http
      .get<Employee>(`${this._apiUrl}/${encodeURIComponent(id)}`)
      .pipe(catchError(this.handleError));
  }

  addEmployee(employee: Employee) {
    employee.picture = this.defaultUserPicture;
    if (!employee.address) {
      employee.address = <Address>{};
    }

    return this._http
      .post(this._apiUrl, employee)
      .pipe(catchError(this.handleError));
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    this._logger.log(`Get employee ${employee.id}`);

    return this._http
      .put<Employee>(
        `${this._apiUrl}/${encodeURIComponent(employee.id)}`,
        employee
      )
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
