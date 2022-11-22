import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-species-yoda',
  templateUrl: './species-yoda.component.html',
  styleUrls: ['./species-yoda.component.css']
})
export class SpeciesYodaComponent implements OnInit {
species:any;
speciesDetails:any;
image:any;
  constructor() { }

  ngOnInit(): void {
    this.getData();
    if(this.speciesDetails.name =="Toong"){
      this.image ="/assets/download (2).jpeg";
    }else if(this.speciesDetails.name =="Zabrak"){
      this.image = "/assets/spe2.jpeg"
    }else if(this.speciesDetails.name =="Human"){
      this.image = "/assets/download (7).jpeg"
    }else if(this.speciesDetails.name =="Droid"){
      this.image = "/assets/spe3.jpeg";
    }
    else{
      this.image = "/assets/species1.jpeg";
    }
  }
  getData(){
    this.species =localStorage.getItem('species');
    this.speciesDetails =JSON.parse(this.species);
    console.log(this.speciesDetails);
    
  }

}
