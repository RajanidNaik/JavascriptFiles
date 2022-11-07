import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changeForm !:FormGroup;
  constructor(private fb:FormBuilder,private userservice:UserLoginService,private router:Router) { }

  ngOnInit(): void {
    this.changeForm=this.fb.group({
      oldpassword:['', Validators.required],
      newpassword:['',Validators.required]
    })
  }
  chnagePassword(){
    if(this.changeForm.get('oldpassword')?.value =='' || this.changeForm.get('newpassword')?.value == '') {
      alert('Please enter the passwords');
    }
    else if(this.changeForm.get('oldpassword')?.value ==  this.changeForm.get('newpassword')?.value){
      alert('passwords cannot be same');
    }else{
      this.userservice.getAllUser().subscribe((data:any)=>{
        for(let i=0; i<data.length; i++){
          if(this.changeForm.get('oldpassword')?.value == data[i].email){
            data[i].email = this.changeForm.get('newpassword')?.value;
            let updatedDetails = {name:data[i].name,email:data[i].email }
            this.userservice.updateUser(updatedDetails,data[i].id).subscribe(()=>{
              alert('password changed successfully');
              this.router.navigateByUrl('/homepage');
            })
          }
        }
      })
    }
  }
}
