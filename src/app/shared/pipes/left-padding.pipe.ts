import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leftPadding',
})
export class LeftPadding implements PipeTransform {
  transform(name: String, length: number) {
    console.log();
    return name.padStart(length, '*');
  }
}
