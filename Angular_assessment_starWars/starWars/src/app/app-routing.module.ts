import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { FilmsComponent } from './films/films.component';
import { FooterComponent } from './footer/footer.component';
import { HomeNameComponent } from './home-name/home-name.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlanetsComponent } from './planets/planets.component';
import { ProfileComponent } from './profile/profile.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipComponent } from './starship/starship.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { YodaComponent } from './yoda/yoda.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'homeName',component:HomeNameComponent},
  {path:'footer',component:FooterComponent},
  {path:'profile',component:ProfileComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'character',component:CharactersComponent},
  {path:'yoda',component:YodaComponent},
  {path:'films',component:FilmsComponent},
  {path:'species',component:SpeciesComponent},
  {path:'planets',component:PlanetsComponent},
  {path:'starship',component:StarshipComponent},
  {path:'vehicles',component:VehiclesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
