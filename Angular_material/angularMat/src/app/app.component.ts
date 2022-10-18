import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularMat';
  showSpinner=false;
  constructor(public dialog: MatDialog) {}
  loadData(){
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
    },5000);
  }
  openDialog(){
 this.dialog.open(DialogExampleComponent);
  }
}
