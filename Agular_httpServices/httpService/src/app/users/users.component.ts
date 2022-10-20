import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( private userService:UserService) { }
name:string="";
email:any='';
// @ViewChild('myForm')form!:NgForm;

  ngOnInit(): void {
   
  }
  isUserCreated:boolean=false;
addPerson(myForm:NgForm){
 
const postBody={
    name:myForm.value.name,
    email:myForm.value.email

  };
  console.log(postBody);
  this.userService.addUser(postBody).subscribe(data=>{
    console.log(data);
    this.isUserCreated=true;
  },(err)=>{
    console.log("unable to add user"+err);
  })
}
}
