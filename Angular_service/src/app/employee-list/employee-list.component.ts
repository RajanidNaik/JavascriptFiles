import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees:any = [];
  public errorMsg:any;
  // public employees = [
  //   {"id":1, "name":"Andrew", "age":30},
  //   {"id":2, "name":"Brandon", "age":25},
  //   {"id":3, "name":"Christina", "age":26},
  //   {"id":4, "name":"Elena", "age":28}
  // ];

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    //this.employees=this._employeeService.getEmployee();
    // this._employeeService.getEmployee()
    // .subscribe(data => this.employees=data);
    this._employeeService.getEmployee()
    .subscribe(data => this.employees=data,
              error =>this.errorMsg=error
      );
  }

}
