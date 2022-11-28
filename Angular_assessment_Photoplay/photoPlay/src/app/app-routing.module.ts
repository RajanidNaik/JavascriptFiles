import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavComponent } from './fav/fav.component';
import { FooterComponent } from './footer/footer.component';
import { HeadderComponent } from './headder/headder.component';
import { ImageZoomComponent } from './image-zoom/image-zoom.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OnSearchComponent } from './on-search/on-search.component';
import { PhotosComponent } from './photos/photos.component';
import { SecondHeadComponent } from './second-head/second-head.component';
import { VideoPlayComponent } from './video-play/video-play.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {path:'head',component:HeadderComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'photo',component:PhotosComponent},
  {path:'video',component:VideosComponent},
  {path:'fav',component:FavComponent},
  {path:'search',component:OnSearchComponent},
  {path:'second',component:SecondHeadComponent},
  {path:'image',component:ImageZoomComponent},
  {path:'play',component:VideoPlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
