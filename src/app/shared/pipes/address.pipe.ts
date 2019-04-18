import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../../services/employee/employee.service';

@Pipe({
  name: 'address',
  pure: false,
})
export class AddressPipe implements PipeTransform {
  transform(value: Address) {
    return `${value.city}`;
  }
}
