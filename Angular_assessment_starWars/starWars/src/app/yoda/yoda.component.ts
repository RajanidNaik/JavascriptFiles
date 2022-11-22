import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yoda',
  templateUrl: './yoda.component.html',
  styleUrls: ['./yoda.component.css']
})
export class YodaComponent implements OnInit {
charecter:any;
charectorDetails:any;
image:any;
  constructor() { }

  ngOnInit(): void {
    this.getData();
    if(this.charectorDetails.name == "Luke Skywalker"){
      console.log('done');
      this.image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-3bzTo-8ACmmxrxRgXCEHKGN7x8iGOfi0w&usqp=CAU";
    }
    else if(this.charectorDetails.name == "C-3PO"){
      this.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhj51ollwk-iRXOHo2gJsn2j6TGz0qWvhjFQ&usqp=CAU";
    }else if(this.charectorDetails.name == "Darth Vader"){
      this.image ="/assets/download.jpeg";
    }else if(this.charectorDetails.name == "Obi-Wan Kenobi"){
      this.image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSlbs2yhSP8uoy-tU1gtkgqTat6ZFvEZf43g&usqp=CAU";
    }else if(this.charectorDetails.name == "Greedo"){
      this.image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNJ0ta4sE4F8theJiAKWkVygwAyTrVe-Wm4TGNNAlDbYuv7GGMywdBLJlUw0DPejQtXo&usqp=CAU";
    }else if(this.charectorDetails.name == "Bossk"){
      this.image = "/assets/download (1).jpeg";
    }
    else{
        this.image ="/assets/YodaLightsaber.webp";
      }
    
  }
getData(){
  this.charecter =localStorage.getItem('character');
  this.charectorDetails =JSON.parse(this.charecter);
  console.log(this.charectorDetails);
  
}
}
