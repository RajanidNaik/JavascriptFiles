import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-list',
  template: `
    <h3>You selected item with id={{itemId}}</h3>
  `,
  styles: [
  ]
})
export class ItemListComponent implements OnInit {
  public itemId:any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id= this.route.snapshot.paramMap.get('id');
    this.itemId=id;
  }

}
