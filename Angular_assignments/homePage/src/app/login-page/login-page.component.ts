import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
    // this.reactiveForm=this.fb.group({
    //   username:[''],
    //   password:['']
    // })
  }

}
