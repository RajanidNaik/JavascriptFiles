import { Component, OnInit } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { HomedialogComponent } from '../homedialog/homedialog.component';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

// dis=false;
select=true;
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    
  }
  onClick(){
// this.dis=true;
this.openDialog();
this.select=!this.select;

  }
  
  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
     let dialogRef = this.dialog.open(HomedialogComponent,{panelClass:'my-Class',position:{top:'30%',right:'16%'}});
    dialogRef.afterClosed().subscribe(()=>{
      this.select=true;
    })
      
    
  }
  
}

