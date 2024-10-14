import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'approximation',
  standalone: true
})
export class ApproximationPipe implements PipeTransform {

  transform(value: number, precision: number = 1): number {
    if (isNaN(value)) {
      return 0;
    }

    const factor = Math.pow(10, precision);
    return Math.round(value * factor) / factor;
  }
}
