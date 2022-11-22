import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starship-yoda',
  templateUrl: './starship-yoda.component.html',
  styleUrls: ['./starship-yoda.component.css']
})
export class StarshipYodaComponent implements OnInit {
starship:any;
starshipDetails:any;
image:any;
  constructor() { }

  ngOnInit(): void {
    this.getData();
    if(this.starshipDetails.name== "Executor"){
      this.image ="/assets/download (5).jpeg"
    }else{
      this.image = "assets/starshipimages.jpeg"
    }
  }
  getData(){
    this.starship =localStorage.getItem('starships');
    this.starshipDetails =JSON.parse(this.starship);
    console.log(this.starshipDetails);
    
  }
}
