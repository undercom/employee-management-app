import { TestBed, inject } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { LoggerService } from 'app/core';

describe('EmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmployeeService,
        LoggerService,
      ]
    });
  });

  it('should ...', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
