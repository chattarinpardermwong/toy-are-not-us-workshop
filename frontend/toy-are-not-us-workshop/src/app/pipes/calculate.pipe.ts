import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculate'
})
export class CalculatePipe implements PipeTransform {

  transform(price:number): number {
    price*32+ 30;
    return price;
  }

}
