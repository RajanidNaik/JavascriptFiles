import { Component, OnInit } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { HomedialogComponent } from '../homedialog/homedialog.component';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

dis=false;
select=true;
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    
  }
  onClick(){
this.dis=true;
this.select=false;
this.openDialog();
  }
  
  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
    this.dialog.open(HomedialogComponent,{panelClass:'my-Class',position:{top:'30%',right:'21%'}})
  }
  
}

