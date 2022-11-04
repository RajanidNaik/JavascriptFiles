import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MatDialog,MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { AddRemoveSuperAdminComponent } from '../add-remove-super-admin/add-remove-super-admin.component';
import { AddRemoveAdminComponent } from '../add-remove-admin/add-remove-admin.component';
@Component({
  selector: 'app-homedialog',
  templateUrl: './homedialog.component.html',
  styleUrls: ['./homedialog.component.css']
})
export class HomedialogComponent implements OnInit {
  
  constructor(private matdialogRef:MatDialogRef<HomedialogComponent>,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  
onClose(){
  this.matdialogRef.close();
}

openDialogAddSuper(){
  this.onClose();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
  this.dialog.open(AddRemoveSuperAdminComponent)
}
openDialogAdd(){
  this.onClose();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
  this.dialog.open(AddRemoveAdminComponent)
}
}
