import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'student'
})
export class StudentPipe implements PipeTransform {

  transform(value: number,totalMarks:number,decimal:number): any {
    //pure pipe
    console.log('student pipe called');
    return (value / totalMarks  * 100).toFixed(decimal);
  }

}
