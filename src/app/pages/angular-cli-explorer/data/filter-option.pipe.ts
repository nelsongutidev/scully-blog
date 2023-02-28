import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOption',
  standalone: true,
})
export class FilterOptionPipe implements PipeTransform {
  transform(values: any[], ...args: any[]) {
    return values.filter((v) => v.positional == null);
  }
}
