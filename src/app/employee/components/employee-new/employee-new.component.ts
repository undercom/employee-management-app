import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css'],
})
export class EmployeeNewComponent implements OnInit {
  employeeDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.employeeDetailsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      position: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl({
        city: new FormControl(''),
        street: new FormControl(''),
      }),
    });

    this.employeeDetailsForm = this.formBuilder.group({
      name: ['', Validators.required],
      position: '',
      email: '',
      address: this.formBuilder.group({
        city: '',
        street: '',
      }),
    });
  }

  ngOnInit() {}
}
