import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id={{departmentId}}</h3>
    <p>
    <button (click)="showOverview()">Overview</button>
    <button (click)="showContact()">Contact</button>
    </p>

    <p>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
    </p>
    <div>
    <button (click)="gotoDepartment()">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId:any;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // let id= this.route.snapshot.paramMap.get('id');
    // this.departmentId=id;
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = params.get('id');
      this.departmentId=id;
    });
  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }

  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }
  goPrevious(){
    let previousId=parseInt(this.departmentId) - 1;
    this.router.navigate(['/departments',previousId]);
  }
  goNext(){
    let nextId=parseInt(this.departmentId) + 1;
    this.router.navigate(['/departments',nextId]);
  }
  gotoDepartment(){
    let selectedId=this.departmentId?this.departmentId:null;
    // this.router.navigate(['/departments',{id:selectedId}]);
    //use relative navigation
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});
  }

}
