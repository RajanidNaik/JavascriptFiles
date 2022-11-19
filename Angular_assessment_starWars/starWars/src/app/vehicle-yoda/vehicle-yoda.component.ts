import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-yoda',
  templateUrl: './vehicle-yoda.component.html',
  styleUrls: ['./vehicle-yoda.component.css']
})
export class VehicleYodaComponent implements OnInit {
vehicles:any;
vehiclesDetails:any;
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.vehicles =localStorage.getItem('vehicles');
    this.vehiclesDetails =JSON.parse(this.vehicles);
    console.log(this.vehiclesDetails);
    
  }
}
