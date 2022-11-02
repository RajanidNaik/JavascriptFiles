import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changeForm !:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.changeForm=this.fb.group({
      oldpassword:['', Validators.required],
      newpassword:['',Validators.required]
    })
  }
  chnagePassword(){
    
  }
}
