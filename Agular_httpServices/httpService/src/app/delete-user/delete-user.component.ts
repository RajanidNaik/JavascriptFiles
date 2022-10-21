import { Component, OnInit } from '@angular/core';
import { isDeleteExpression } from 'typescript';
import { UserService } from '../user.service'
@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
deletePerson(){
this.userService.deleteUser(1).subscribe(data=>{
  console.log('User deleted successfully'+data);
},(err)=>{
  console.log("unable to delete user"+err);
})
}
}
