import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalConvert'
})
export class DecimalConvertPipe implements PipeTransform {
  transform(value: number, decimalPlaces: number): string {

    const roundedValue = value.toFixed(decimalPlaces);
  
    return roundedValue.replace('.', ',');
  }
}

