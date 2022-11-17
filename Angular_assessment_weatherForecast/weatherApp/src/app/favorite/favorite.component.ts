import { Component, OnInit } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { FavoriteDialogComponent } from '../favorite-dialog/favorite-dialog.component';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
      favourite:boolean=true;
      color:boolean=false;
      favouriteDetails:any;
      favWeatherDetails:any;
      count:Number=0;
      cityName:any;
      imgId:any;
      weatherImg:any;
      temp:any;
      weatherInfo:any;
      favourites:any=[];
      mobileMedia:any = window.matchMedia('(max-width:480px)');
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    this.favouriteDetails = localStorage.getItem('favouriteDeatail');
    this.favWeatherDetails=JSON.parse(this.favouriteDetails) ;
    console.log(this.favWeatherDetails);
    
    if( this.favWeatherDetails == null  ){
      this.favourite=false;
    }else if(this.favWeatherDetails.length <= 0){
      this.favourite=false;
    }else{
      this.count = this.favWeatherDetails.length;
    }
    
    // this.count = this.favWeatherDetails.length;
    // console.log(this.count);
    
  }
  

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height='30.25%';
    dialogConfig.width='38.17%';
    if(this.mobileMedia.matches){
      dialogConfig.height='22%';
      dialogConfig.width='80%';
    }
    this.dialog.open(FavoriteDialogComponent,dialogConfig
      
    )   
  }
onFav(id:any){
if(localStorage.getItem('favouriteDeatail')){
  let olddata = JSON.parse(localStorage.getItem('favouriteDeatail') || '[]');
  let currentData = olddata.find((data:any)=>{
    return data['name'] == id['name'];
  });
  let index = olddata.indexOf(currentData);
  olddata.splice(index,1);
  localStorage.setItem('favouriteDeatail',JSON.stringify(olddata));
  window.location.reload();
}
}
}
