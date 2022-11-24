import { Component, OnInit } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { RecDialogComponent } from '../rec-dialog/rec-dialog.component';
@Component({
  selector: 'app-recent-page',
  templateUrl: './recent-page.component.html',
  styleUrls: ['./recent-page.component.css']
})
export class RecentPageComponent implements OnInit {
  mobileMedia:any = window.matchMedia('(max-width:750px)');
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height='30.52%';
    dialogConfig.width='38%';
    if(this.mobileMedia.matches){
      dialogConfig.height='20%';
      dialogConfig.width='90%';
    }
    this.dialog.open(RecDialogComponent,dialogConfig
      
    )   
  }
}
