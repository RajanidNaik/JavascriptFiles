import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeNameComponent } from './home-name/home-name.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CharactersComponent } from './characters/characters.component';
import { YodaComponent } from './yoda/yoda.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNameComponent,
    FooterComponent,
    ProfileComponent,
    NavbarComponent,
    CharactersComponent,
    YodaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
