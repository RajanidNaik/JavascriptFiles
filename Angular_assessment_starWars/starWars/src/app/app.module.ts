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
import { FilmsComponent } from './films/films.component';
import { SpeciesComponent } from './species/species.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarshipComponent } from './starship/starship.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './cache.interceptor';
import { CacheResolverService } from './cache-resolver.service';
import { StarWarsPeopleService } from './star-wars-people.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNameComponent,
    FooterComponent,
    ProfileComponent,
    NavbarComponent,
    CharactersComponent,
    YodaComponent,
    FilmsComponent,
    SpeciesComponent,
    PlanetsComponent,
    StarshipComponent,
    VehiclesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CacheResolverService,
    StarWarsPeopleService,
    {
     provide: HTTP_INTERCEPTORS,
     useClass:CacheInterceptor,
       multi:true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
