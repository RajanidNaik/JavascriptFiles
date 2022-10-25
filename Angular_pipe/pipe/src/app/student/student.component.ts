import { Component, OnInit } from '@angular/core';
import { StudentPipe } from '../student.pipe';
// import { StudentsService } from '../students.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
  
 
})
export class StudentComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
    
  }
  filterText='';
  student:any;
  students:any=[
    {name:'vineeth',course:'be',marks:510,dob:new Date('4-6-1999'),gender:'male'},
    {name:'Ram',course:'mba',marks:520,dob:new Date('11-12-1997'),gender:'male'},
    {name:'Raj',course:'be',marks:507,dob:new Date('10-12-1999'),gender:'male'},
    {name:'sita',course:'mbbs',marks:540,dob:new Date('9-7-1999'),gender:'female'}
      ];
      totalMarks:number=600;

      addStudent(){
        // this.students.push({name:'gowri',course:'BSc',marks:530,dob:new Date('10-12-1998'),gender:'female'})//same reference
        //change the reference
        let stdCopy=Object.assign([],this.students);
        stdCopy.push({name:'gowri',course:'BSc',marks:530,dob:new Date('10-12-1998'),gender:'female'});
        this.students=stdCopy;
      } 
      changeGender(){
        // this.students[0].gender='female';
        //change reference
        let change=Object.assign([],this.students);
        change[0].gender='female';
        this.students=change;

        //impure change
        // this.students[0].gender='female';
      }   
      onMouseMove(){
        
      } 
}
