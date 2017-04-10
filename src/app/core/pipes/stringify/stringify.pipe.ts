import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringify',
  pure: false
})
export class StringifyPipe implements PipeTransform {

  transform(value: any): string {
    return Object.keys(value).map((key) => value[key]).join(', ');
  }
}
