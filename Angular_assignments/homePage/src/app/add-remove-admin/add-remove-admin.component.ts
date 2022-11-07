import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormArray, NgForm } from '@angular/forms';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-add-remove-admin',
  templateUrl: './add-remove-admin.component.html',
  styleUrls: ['./add-remove-admin.component.css']
})
export class AddRemoveAdminComponent implements OnInit {
add:boolean=false;
adminForm!:FormGroup;
adminDetails:any;
  constructor(private fb:FormBuilder,private adminService:SuperAdminService) { }

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      name:['',Validators.required],
      employeeCode:['',Validators.required],
      emailId:['',[Validators.required,Validators.email]],
      id:['']
    });
    this.adminService.getAdmins().subscribe((data)=>{
      this.adminDetails=data;
    })
  }
  addAdmin(){
    const adminDetails = {name:this.adminForm.get('name')?.value,empCode:this.adminForm.get('employeeCode')?.value,emailId:this.adminForm.get('emailId')?.value};
  
    this.adminService.addSuperAdmin(adminDetails).subscribe(()=>{
      alert("Super Admin added successfully");
      this.adminService.getSuperAdmins().subscribe((data)=>{
        this.adminDetails=data;
      })
      
    })
  }
  deleteAdmins(id:any){
  
    this.adminService.deleteAdmin(id).subscribe(()=>{
      alert("Super Admin deleted");
      this.adminService.getAdmins().subscribe((data)=>{
        this.adminDetails=data;
      })
    })
  }
  updateAdmin(id:any,name:any,empCode:any,emailId:any){
  
    let updatedAdmin = {name:name,empCode:empCode,emailId:emailId}
    
    this.adminService.updateAdmin(updatedAdmin,id).subscribe(()=>{
      alert("Super Admin updated");
      this.adminService.getAdmins().subscribe((data)=>{
        this.adminDetails=data;
      })
    })
  }
  
  
  onDelete(){
    this.add=false;
  }
}
