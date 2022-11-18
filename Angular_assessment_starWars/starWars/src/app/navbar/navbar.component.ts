import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
    // const activePage = window.location.pathname;
    // console.log(activePage);
    // const navLinks = document.querySelectorAll('div a').forEach(link =>{
    //   // if(link.href.includes(`${activePage}`)){
    //   //   link.classList.add('active');
    //   // }
    // })
  }
  

}
