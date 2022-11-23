import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavPageComponent } from './fav-page/fav-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './home/home.component';
import { RecentPageComponent } from './recent-page/recent-page.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'homePage',component:HomePageComponent},
  {path:'favPage',component:FavPageComponent},
  {path:'recent',component:RecentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
