import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormArray, NgForm } from '@angular/forms';
import { SuperAdminService } from '../super-admin.service';
@Component({
  selector: 'app-add-remove-super-admin',
  templateUrl: './add-remove-super-admin.component.html',
  styleUrls: ['./add-remove-super-admin.component.css']
})
export class AddRemoveSuperAdminComponent implements OnInit {
 add:boolean=false;
 adminForm!:FormGroup;
 adminDetails:any;
//  form = this.fb.group({
  
//   superAdmins:this.fb.array([])
// });

  constructor(private fb:FormBuilder,private adminService:SuperAdminService) { }
    

// get superAdmin(){
//   return this.form.controls["superAdmins"] as FormArray;
// }
 
// addSuperAdmin(){
//   this.superAdmin.push(this.adminForm);
  
// }

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      name:['',Validators.required],
      employeeCode:['',Validators.required],
      emailId:['',[Validators.required,Validators.email]],
      id:['']
    });
    this.adminService.getSuperAdmins().subscribe((data)=>{
      this.adminDetails=data;
    })
  }
// onDelete(empIndex:number){
//   this.superAdmin.removeAt(empIndex);
// }

// addNewAdmin(adminForm:any){
  
// const postAdmin={
//   name:this.adminForm.get('name')?.value,
//   empCode:this.adminForm.get('employeeCode')?.value,
//   emailId:this.adminForm.get('emailId')?.value
//   // name:form.value.name,
//   // empCode:form.value.employeeCode,
//   // emailId:form.value.emailId
// };
// this.adminService.addSuperAdmin(postAdmin).subscribe((data)=>{
//   alert('done');
//   this.addSuperAdmin();
// })
  
// }
addSuperAdmin(){
  const adminDetails = {name:this.adminForm.get('name')?.value,empCode:this.adminForm.get('employeeCode')?.value,emailId:this.adminForm.get('emailId')?.value};

  this.adminService.addSuperAdmin(adminDetails).subscribe(()=>{
    alert("Super Admin added successfully");
    this.adminService.getSuperAdmins().subscribe((data)=>{
      this.adminDetails=data;
    })
    
  })
}
deleteSuperAdmins(id:any){
  
  this.adminService.deleteSuperAdmin(id).subscribe(()=>{
    alert("Super Admin deleted");
    this.adminService.getSuperAdmins().subscribe((data)=>{
      this.adminDetails=data;
    })
  })
}
editSuperAdmin(id:any){
  this.adminService.updateSuperAdmin(id).subscribe(()=>{
    alert("Super Admin Edited");
    this.adminService.getSuperAdmins().subscribe((data)=>{
      this.adminDetails=data;
    })
  })
}
}

