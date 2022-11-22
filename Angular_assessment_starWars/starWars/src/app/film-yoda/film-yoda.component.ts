import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-yoda',
  templateUrl: './film-yoda.component.html',
  styleUrls: ['./film-yoda.component.css']
})
export class FilmYodaComponent implements OnInit {
 films:any;
 chapter:any;
 image:any;
  constructor() { }

  ngOnInit(): void {
    this.getData();
    if(this.chapter.title == "A New Hope"){
      this.image ="/assets/A_New_Hope_poster.webp";
    }else if(this.chapter.title == "The Empire Strikes Back"){
      this.image ="/assets/film2.jpg";
    }
    else if(this.chapter.title == "Return of the Jedi"){
      this.image ="/assets/film3.jpg";
    }else if(this.chapter.title == "The Phantom Menace"){
      this.image ="/assets/film4.jpeg"
    }else if(this.chapter.title == "Attack of the Clones"){
      this.image ="/assets/film5.jpeg"
    }
    else if(this.chapter.title == "Revenge of the Sith"){
      this.image ="/assets/film6.jpeg"
    }
    else{
      this.image = "/assets/films1.jpeg";
    }
  }
  getData(){
    this.films =localStorage.getItem('films');
    this.chapter =JSON.parse(this.films);
    
  }
}
