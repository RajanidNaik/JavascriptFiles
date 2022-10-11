import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
   firstname:string="";
  lastname:string="";
  //using child decorators @view child
  // @ViewChild('myForm')form:NgForm;
  // onSubmit(){
  //   console.log(this.form);
  // }

  // onSubmit(form:HTMLFormElement){
    onSubmit(form:NgForm){
    console.log(form);
    //console.log("forms submitted");
  }
  }
