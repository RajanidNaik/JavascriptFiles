import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
    Department List
    </h3>
    <ul class="items">
    <li (click)="onSelect(department)" [class.selected]="isSelected(department)"  *ngFor="let department of departments">
    <span class="badge">{{department.id}}</span><span class="names">{{department.name}}</span>
    </li>
    </ul>
  `,
  styles: [
    `
    .item li .selected{
      background-color:blue;
      color:#000;
    }
    .badge{
      color:green;
      padding:6px;
    }
    .items{
      border-radius:5px;
      border:0 1px solid;
    }
    .names{
      color:orange;
      cursor:pointer;
    }
    `
    
  ]
})
export class DepartmentListComponent implements OnInit {
  public selectedId:any;
  departments=[
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Node"},
    {"id":3, "name":"MongoDB"},
    {"id":4, "name":"Ruby"},
    {"id":5, "name":"Bootstrap"}
  ]

  constructor(private router:Router, private route:ActivatedRoute) { }
  onSelect(department:any){
    // this.router.navigate(['/departments',department.id]);
    //use relative navigation
    this.router.navigate([department.id],{relativeTo:this.route});

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.selectedId=id;
    })
  }
  isSelected(department:any){
    return department.id===this.selectedId;
  }

}
