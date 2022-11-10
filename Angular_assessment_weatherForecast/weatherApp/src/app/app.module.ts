import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoriteDialogComponent } from './favorite-dialog/favorite-dialog.component';
import { RecentSearchComponent } from './recent-search/recent-search.component';
import { RecentDialogComponent } from './recent-dialog/recent-dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeComponent,
    FavoriteComponent,
    FavoriteDialogComponent,
    RecentSearchComponent,
    RecentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
