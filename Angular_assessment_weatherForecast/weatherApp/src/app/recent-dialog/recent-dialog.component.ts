import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-dialog',
  templateUrl: './recent-dialog.component.html',
  styleUrls: ['./recent-dialog.component.css']
})
export class RecentDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClear(){
    localStorage.removeItem('recentSearchWeather');
    window.location.reload();
  }

}
