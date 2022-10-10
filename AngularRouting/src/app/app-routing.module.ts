import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //routing is good but not flexible ,if we change parent route we have to chnage the path in outside also..so we can use relative navigation
  // {path:'', redirectTo:'/departments', pathMatch:'full'},
  // {path:'departments', component:DepartmentListComponent},
  // {path:'departments/:id',component:DepartmentDetailComponent},
  // {path:'employees', component:EmployeeListComponent},
  // {path:'**', component:PageNotFoundComponent}

  // chnage the parent route
  // {path:'', redirectTo:'/departments-list', pathMatch:'full'},
  // {path:'departments-list', component:DepartmentListComponent},
  // {path:'departments-list/:id',component:DepartmentDetailComponent},
  // {path:'employees', component:EmployeeListComponent},
  // {path:'**', component:PageNotFoundComponent}


  //child routing
   {path:'', redirectTo:'/departments', pathMatch:'full'},
   {path:'departments', component:DepartmentListComponent},
   {path:'departments/:id',component:DepartmentDetailComponent,
  children:[
    {path:'overview', component:DepartmentOverviewComponent},
    {path:'contact', component:DepartmentContactComponent}
  ]
  },
   {path:'employees', component:EmployeeListComponent},
   {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentListComponent,EmployeeListComponent,PageNotFoundComponent,DepartmentDetailComponent,DepartmentOverviewComponent,DepartmentContactComponent]
                                                                