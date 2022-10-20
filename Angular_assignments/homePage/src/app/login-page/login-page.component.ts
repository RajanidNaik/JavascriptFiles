import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
 reactiveForm!:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm=this.fb.group({
      username:[''],
      password:['']
    })
  }

}
