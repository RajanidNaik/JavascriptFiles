import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {
newValue:string='';
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: any, ...args: unknown[]): any {
    this.newValue=value.split('').reverse().join('');
    return this.newValue;
  }

}
