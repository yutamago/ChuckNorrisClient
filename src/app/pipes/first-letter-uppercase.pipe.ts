import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUppercase',
  pure: true
})
export class FirstLetterUppercasePipe implements PipeTransform {

  transform(value: string | undefined): string | undefined {
    if(!value) return value;

    if(value.length > 1) {
      return value.slice(0, 1).toUpperCase() + value.slice(1);
    } else {
      return value.toUpperCase();
    }
  }

}
