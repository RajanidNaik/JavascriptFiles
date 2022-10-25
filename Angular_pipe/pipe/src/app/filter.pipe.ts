import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure:false //for impure pipe
})
export class FilterPipe implements PipeTransform {

  transform(students:any,filterText:string): any {
    console.log('filter pipe called')
    if(students.length === 0 || filterText === ''){
      return students;
    }else{
      return students.filter((student:any)=>{
        return student.gender.toLowerCase() === filterText.toLowerCase()
      })
    }
  }

}
