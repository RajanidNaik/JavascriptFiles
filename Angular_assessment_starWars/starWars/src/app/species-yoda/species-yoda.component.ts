import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-species-yoda',
  templateUrl: './species-yoda.component.html',
  styleUrls: ['./species-yoda.component.css']
})
export class SpeciesYodaComponent implements OnInit {
species:any;
speciesDetails:any;
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.species =localStorage.getItem('species');
    this.speciesDetails =JSON.parse(this.species);
    console.log(this.speciesDetails);
    
  }

}
