import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-remove-admin',
  templateUrl: './add-remove-admin.component.html',
  styleUrls: ['./add-remove-admin.component.css']
})
export class AddRemoveAdminComponent implements OnInit {
add:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  addAdmin(){
    this.add=true;
  }
  onDelete(){
    this.add=false;
  }
}
