import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees:any = [];
  public errorMsg:any;
  // public employees = [
  //   {"id":1, "name":"Andrew", "age":30},
  //   {"id":2, "name":"Brandon", "age":25},
  //   {"id":3, "name":"Christina", "age":26},
  //   {"id":4, "name":"Elena", "age":28}
  // ];//solution works ,but it is not good ..so we can use services
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    //this.employees = this._employeeService.getEmployee();
    // this._employeeService.getEmployee()
    // .subscribe(data => this.employees=data);
    this._employeeService.getEmployee()
    .subscribe(data => this.employees=data,
               error => this.errorMsg=error
      );
  }

}
