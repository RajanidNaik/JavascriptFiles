import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadderComponent } from './headder/headder.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { FavComponent } from './fav/fav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { OnSearchComponent } from './on-search/on-search.component';
import { SecondHeadComponent } from './second-head/second-head.component';
import { ImageZoomComponent } from './image-zoom/image-zoom.component';
import { VideoPlayComponent } from './video-play/video-play.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadderComponent,
    PhotosComponent,
    VideosComponent,
    FavComponent,
    NavbarComponent,
    FooterComponent,
    OnSearchComponent,
    SecondHeadComponent,
    ImageZoomComponent,
    VideoPlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
