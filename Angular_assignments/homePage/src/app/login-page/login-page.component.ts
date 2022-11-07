import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from '../user-login.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
 loginForm !:FormGroup;
 user:boolean=false;
  constructor(private fb:FormBuilder, private userservice:UserLoginService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['', Validators.required],
      password:['',Validators.required]
    })
  }
login(){
// this.userservice.getAllUser().subscribe(res=>{
//   this.user=res;
//   console.log(this.user);
//   if(this.user.name ===this.loginForm.value.username&& this.user.email===this.loginForm.value.password){
//     this.loginForm.reset();
//     this.router.navigate(['homepage'])
//   }else{
//     alert('user not found')
//   }
// },err=>{
//   alert('something went wrong!!');
// })

this.userservice.getAllUser().subscribe(data=>{
  for( let i=0;i<data.length;i++) {
    if(this.loginForm.get("username")?.value == data[i].name && this.loginForm.get("password")?.value==data[i].email){
      this.user=true;
    }
    
  }
  if(this.user){
    this.router.navigateByUrl('/homepage');
  }
  else{
    alert('error!!');
  }
  
})
}
}
