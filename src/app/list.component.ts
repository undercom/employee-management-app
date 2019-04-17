import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './list.component.html',
})
export class EmployeeListComponent {
  isDisabled = false;
  user = {
    username: 'foobar',
    firstName: 'Foo',
    lastName: 'Bar',
    age: 18,
    isAdmin: false,
  };

  onClick() {
    console.log('Button click');
  }

  onKeyUp(event) {
    console.log('Input', event);
  }
}
