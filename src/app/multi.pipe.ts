import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: number, multiplier: number): number {
    console.log('Call pipe');
    return value * multiplier;
  }

}