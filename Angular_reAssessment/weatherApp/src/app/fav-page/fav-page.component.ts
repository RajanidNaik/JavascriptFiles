import { Component, OnInit } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { FavDilogComponent } from '../fav-dilog/fav-dilog.component';

@Component({
  selector: 'app-fav-page',
  templateUrl: './fav-page.component.html',
  styleUrls: ['./fav-page.component.css']
})
export class FavPageComponent implements OnInit {
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
    this.dialog.open(FavDilogComponent,dialogConfig
      
    )   
  }
}
