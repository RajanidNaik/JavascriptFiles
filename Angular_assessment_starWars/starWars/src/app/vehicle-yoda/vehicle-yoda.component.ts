import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-yoda',
  templateUrl: './vehicle-yoda.component.html',
  styleUrls: ['./vehicle-yoda.component.css']
})
export class VehicleYodaComponent implements OnInit {
vehicles:any;
vehiclesDetails:any;
image:any;
  constructor() { }

  ngOnInit(): void {
    this.getData();
    if(this.vehiclesDetails.name == "Sail barge"){
      this.image ="/assets/sail.jpeg"
    }else if(this.vehiclesDetails.name == "Sith speeder"){
      this.image ="/assets/download (6).jpeg"
    }
    else{
      this.image = "/assets/starvehicle.webp"
    }
  }
  getData(){
    this.vehicles =localStorage.getItem('vehicles');
    this.vehiclesDetails =JSON.parse(this.vehicles);
    console.log(this.vehiclesDetails);
    
  }
}
