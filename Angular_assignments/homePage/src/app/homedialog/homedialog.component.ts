import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-homedialog',
  templateUrl: './homedialog.component.html',
  styleUrls: ['./homedialog.component.css']
})
export class HomedialogComponent implements OnInit {
  
  constructor(private matdialogRef:MatDialogRef<HomedialogComponent>) { }

  ngOnInit(): void {
  }
  
onClose(){
  this.matdialogRef.close();
}
}
