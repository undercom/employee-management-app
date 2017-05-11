import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EmployeeService } from '../../core/index';

@Component({
  selector: 'app-employee-details-reactive',
  templateUrl: './employee-details-reactive.component.html',
})
export class EmployeeDetailsReactiveComponent implements OnInit {
  employee: any;

  employeeName: FormControl;
  employeePosition: FormControl;
  employeeEmail: FormControl;
  employeeDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private employeesService: EmployeeService,
    private router: Router,
  ) { }

  onSubmit() {
    const employeeToSave = this.employeeDetailsForm.value;
    this.employeesService.addEmployee(employeeToSave);

    this.router.navigateByUrl('/employees');
  }

  hasDigit(digit: number, error: string) {
    return function (input: FormControl) {
      return input.value && input.value.indexOf(digit) >= 0 ? null : { [ error ]: true };
    };
  }

  ngOnInit() {
    this.setupForm();
  }

  private setupForm() {
    this.employeeName = new FormControl('', [ Validators.required, Validators.minLength(5) ]);
    this.employeePosition = new FormControl('', [ Validators.required, this.hasDigit(2, 'MustHave2') ]);
    this.employeeEmail = new FormControl('', [Validators.required]);

    this.employeeDetailsForm = this.formBuilder.group({
      employeeName: this.employeeName,
      employeePosition: this.employeePosition,
      employeeEmail: this.employeeEmail,
    });
  }
}
