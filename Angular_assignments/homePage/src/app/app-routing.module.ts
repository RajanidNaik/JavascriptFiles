import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CheckEmailComponent } from './check-email/check-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component'
const routes: Routes = [
  { path:'',redirectTo:'homepage',pathMatch:'full'},
  { path:'homepage',component:HomePageComponent},
  { path:'loginpage',component:LoginPageComponent},
  { path:'checkemail',component:CheckEmailComponent},
  { path:'changePassword',component:ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomePageComponent,LoginPageComponent,CheckEmailComponent,ChangePasswordComponent];
