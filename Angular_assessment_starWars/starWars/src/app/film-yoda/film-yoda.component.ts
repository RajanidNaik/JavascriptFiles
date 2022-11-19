import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-yoda',
  templateUrl: './film-yoda.component.html',
  styleUrls: ['./film-yoda.component.css']
})
export class FilmYodaComponent implements OnInit {
 films:any;
 chapter:any;
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.films =localStorage.getItem('films');
    this.chapter =JSON.parse(this.films);
    
  }
}
