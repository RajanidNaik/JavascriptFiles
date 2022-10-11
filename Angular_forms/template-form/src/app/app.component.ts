import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-form';
  //to retriev data create property
  firstname:string="";
  lastname:string="";
  email:string="";
  password:string="";
  @ViewChild('myForm')form!:NgForm;
  onSubmit(){
console.log(this.form);
this.firstname=this.form.value.personDetails.firstname;
this.lastname=this.form.value.personDetails.lastname;
this.email=this.form.value.personDetails.email;
this.password=this.form.value.password;


//to reset
this.form.reset();
  }
  // setDefaultValues(){
  //   this.form.setValue({
  //     personDetails :{
  //       firstname:'Rajani',
  //       lastname:'naik',
  //       email:'abc@12.com'
  //     },
  //     psw:'',
      

  //   })
    // using patch value()
    setDefaultValues(){
      this.form.form.patchValue({
        personDetails :{
          firstname:'Rajani',
          lastname:'naik',
          email:'abc@12.com'
        }
      })

  }
}
