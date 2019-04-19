import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { SlicePipe } from '@angular/common';
import { increaseElementDepthCount } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css'],
})
export class EmployeeNewComponent implements OnInit {
  employeeDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // this.employeeDetailsForm = new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   position: new FormControl(''),
    //   email: new FormControl(''),
    //   address: new FormControl({
    //     city: new FormControl(''),
    //     street: new FormControl(''),
    //     number: new FormControl(''),
    //   }),
    // });

    this.employeeDetailsForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, this.tooShort])],
      position: '',
      email: '',
      phone: [
        '',
        Validators.compose([Validators.required, this.startWithPlus]),
      ],
      address: this.formBuilder.group({
        city: '',
        street: '',
        number: '',
      }),
    });
  }

  tooShort(input: FormControl) {
    const minLength = 5;
    return input.value.length > minLength ? null : { tooSmall: true };
  }

  startWithPlus(input: FormControl) {
    console.log(input.value.includes('+'));
    return input.value.includes('+') ? null : { hasNotPlus: true };
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.employeeDetailsForm.value);
  }
}
