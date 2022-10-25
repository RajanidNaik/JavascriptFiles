import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
   students:any=[
{name:'Ram',course:'mba',marks:520,dob:new Date(12-6-2000)},
{name:'Raj',course:'be',marks:420,dob:new Date(10-12-1999)},
{name:'sita',course:'mbbs',marks:540,dob:new Date(25-7-2000)}
  ];
  totalMarks:number=600;
}
