import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Input() list: any;
  @Output() changeEvent = new EventEmitter();

  onKeyUp(value: any) {
    this.changeEvent.emit(value);
  }
}
