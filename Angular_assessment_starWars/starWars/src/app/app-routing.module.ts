import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { FilmYodaComponent } from './film-yoda/film-yoda.component';
import { FilmsComponent } from './films/films.component';
import { FooterComponent } from './footer/footer.component';
import { HomeNameComponent } from './home-name/home-name.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlanetYodaComponent } from './planet-yoda/planet-yoda.component';
import { PlanetsComponent } from './planets/planets.component';
import { ProfileComponent } from './profile/profile.component';
import { SpeciesYodaComponent } from './species-yoda/species-yoda.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipYodaComponent } from './starship-yoda/starship-yoda.component';
import { StarshipComponent } from './starship/starship.component';
import { VehicleYodaComponent } from './vehicle-yoda/vehicle-yoda.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { YodaComponent } from './yoda/yoda.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'homeName',component:HomeNameComponent},
  {path:'footer',component:FooterComponent},
  {path:'profile',component:ProfileComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'character',component:CharactersComponent,
  children:[{
    path:'yoda',component:YodaComponent
  }]
},
  
  {path:'yoda',component:YodaComponent},
  {path:'films',component:FilmsComponent,
children:[{
  path:'filmYoda',component:FilmYodaComponent
}]
},
  {path:'species',component:SpeciesComponent,
children:[{
  path:'speciesYoda',component:SpeciesYodaComponent
}]
},
  {path:'planets',component:PlanetsComponent,
children:[{
  path:'planetYoda',component:PlanetYodaComponent
}]},
  {path:'starship',component:StarshipComponent,
children:[{
  path:'starshipYoda',component:StarshipYodaComponent
}]
},
  {path:'vehicles',component:VehiclesComponent,
children:[{
  path:'vehicleYoda',component:VehicleYodaComponent
}]
},
  {path:'speciesYoda',component:SpeciesYodaComponent},
  {path:'vehicleYoda',component:VehicleYodaComponent},
  {path:'planetYoda',component:PlanetYodaComponent},
  {path:'starshipYoda',component:StarshipYodaComponent},
  {path:'filmYoda',component:FilmYodaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
