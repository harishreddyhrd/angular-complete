import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimString',
})
export class TrimStringPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (value.length > limit) {
      return value.slice(0, limit) + '...';
    } else {
      return value;
    }
  }
}
