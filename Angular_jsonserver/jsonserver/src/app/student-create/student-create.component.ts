import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service'
import { SharedEmployee } from '../shared-employee';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  constructor(private server:ServerService) { }
users:any;
  ngOnInit(): void {
    this.server.getEmployees().subscribe((data)=>{
      this.users=data;
      console.log(data);
      
    },
    (error)=>{
      console.log('error occured');
    });
  }

}
