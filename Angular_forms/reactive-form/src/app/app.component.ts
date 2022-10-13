import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-form';
  reactiveForm:FormGroup;
  formStatus;
  
  constructor(private fb: FormBuilder,private http:HttpClient) { }

//upload a image
 
 Url="/home/rajani/javascript/Angular_projects/Angular_forms/reactive-form/src/assets/img/img.jpeg"

selectFile(event){
  console.log(event);
  if(event.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event:any)=>{
      this.Url=event.target.result;
    }
  }
  
}



  // ngOnInit(){
  //   this.reactiveForm= new FormGroup({
      
  //       studentname:new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
  //     fathername:new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
  //     mothername:new FormControl(null),
  //     gender:new FormControl(null),
  //     email:new FormControl(null,[Validators.required,Validators.email]),
  //     age:new FormControl(null),
  //     phoneNumber:new FormControl(null,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")),
  //     skills:new FormArray([
        
  //       new FormControl(null,Validators.required)
  //     ]),
  //     address: new FormControl({
  //       street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //     })
  //   })

  // }
  //using FromBuilder service to generate controls
  ngOnInit(){
    this.reactiveForm= this.fb.group({
      
        studentname:['',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
      fathername:['',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
      mothername:[''],
      gender:[''],
      email:['',[Validators.required,Validators.email]],
      age:[''],
      phoneNumber:['',Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      skills:this.fb.array([
        
        this.fb.control('')
      ]),
      address:this.fb.group({
        street: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zip: ['',Validators.required]
      })
    })


    this.reactiveForm.statusChanges.subscribe((value)=>{
      console.log(value);
      this.formStatus=value;
    })

    setTimeout(()=>{
      this.reactiveForm.patchValue({
        studentname:'Jhon',
        fathername:'Doe',
        email:'raj@2000',
        phoneNumber:1234567891,
        address:{
          street:130,
          city:'Mandarthi',
          state:'Karnataka',
          zip:576223
        }

      })
    },4000)

  }
  onSubmit(){
    console.log(this.reactiveForm);
    this.reactiveForm.reset();
  }
  addSkills(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null));
  }
  onSubmisson(){
    if (this.reactiveForm.invalid) {
      alert('please fill required details');
    } 
  }
}
