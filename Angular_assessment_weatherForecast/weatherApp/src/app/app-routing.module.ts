import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './home/home.component';
import { RecentSearchComponent } from './recent-search/recent-search.component';
const routes: Routes = [
  {path:'homepage',component:HomePageComponent},
  {path:'home',component:HomeComponent},
  {path:'favourite',component:FavoriteComponent},
  {path:'recent',component:RecentSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
