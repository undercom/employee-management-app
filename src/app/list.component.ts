import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './list.component.html',
})
export class EmployeeListComponent {
  isDisabled = false;
  @Input() user: any;
  @Output() change = new EventEmitter();

  onClick() {
    console.log('Button click');
  }

  onKeyUp(value: any) {
    console.log('Input', value);
    this.change.emit(value);
  }
}
