import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  template: `
    <h3>Products</h3>
    <ul>
    <li (click)="onSelect(item)" *ngFor="let item of product">
    <span>{{item.id}}</span>{{item.name}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class ProductComponent implements OnInit {
  product=[
    {"id":1,"name":"Mobile"},
    {"id":2,"name":"Lap-top"},
    {"id":3,"name":"Smart-Watch"},
  ]

  constructor(private router:Router) { }
  onSelect(item:any){
    this.router.navigate(['/item',item.id]);
    //this.router.navigate(['/item'],{queryParams:{orderby:'price'}});
  }

  ngOnInit(): void {
  }

}
