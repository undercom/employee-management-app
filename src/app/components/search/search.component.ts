import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Input() placeholderText: string;

  @Output() textChanged = new EventEmitter<string>();

  onKeyUp(newText: string) {
    const isEmpty = newText.length > 0;
    if (!isEmpty) {
      this.textChanged.next(newText);
    }
  }
}
