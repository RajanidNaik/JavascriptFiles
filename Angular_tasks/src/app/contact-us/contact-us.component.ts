import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  template: `
    <p>
      contact-us works! {{data}}
    </p>
  `,
  styles: [
  ]
})
export class ContactUsComponent implements OnInit {
public data:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
this.route.queryParams.subscribe(params =>{
  this.data=params['user'];
  this.data=params['age'];

})
}
}
  


