import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-dialog',
  templateUrl: './favorite-dialog.component.html',
  styleUrls: ['./favorite-dialog.component.css']
})
export class FavoriteDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
onClear(){
  localStorage.removeItem('favouriteDeatail');
  window.location.reload();
  
}
}
