import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  editUser(){
    this.userService.updateUser().subscribe(data=>{
      console.log(data);
    },(err)=>{
      console.log(err);
    });

  }

}
