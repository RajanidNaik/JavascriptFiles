import { Component, OnInit } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { RecentDialogComponent } from '../recent-dialog/recent-dialog.component';
import { WeatherService } from '../weather.service';
import { Information } from '../information';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css']
})
export class RecentSearchComponent implements OnInit {
 recentSearch:boolean=true;
 recentSearchHistory:any=[];
 color:boolean=false;
 searchHistory:any = localStorage.getItem('weatherDeatail');
 recentHistory:any;
 search:any;
 data = new Information();
 mobileMedia:any = window.matchMedia('(max-width:480px)');
  constructor(private dialog:MatDialog,public service:WeatherService, public router:Router) { }
 
  ngOnInit(): void {
    this.search = localStorage.getItem('recentSearchWeather');
    this.recentHistory=JSON.parse(this.search);
    if(this.recentHistory == null){
      this.recentSearch=false;
    }
  }
  onFavourite(id:any){
    this.color=true;
    let list:any=[];
   if(localStorage.getItem('favouriteDeatail')){
     let oldData = JSON.parse(localStorage.getItem('favouriteDeatail') || '[]');
     let preData = oldData.find((old:any)=>{
             return old['name'] == id['name'];
        });
        if(preData == undefined){
            list = [id,...oldData];
            console.log(list)
          }else{
             let seracData = oldData.indexOf(preData);
             let currentData = oldData.splice(seracData,1)[0];
             list = [currentData,...oldData];
          }
   }else{
     list = [id];
   }
   localStorage.setItem('favouriteDeatail',JSON.stringify(list));
 }
  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height='30.52%';
    dialogConfig.width='38.17%';
    if(this.mobileMedia.matches){
      dialogConfig.height='22%';
      dialogConfig.width='80%';
    }
    this.dialog.open(RecentDialogComponent,dialogConfig
      
    )   
  }
}
