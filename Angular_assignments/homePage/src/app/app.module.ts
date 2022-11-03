import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckEmailComponent } from './check-email/check-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomedialogComponent } from './homedialog/homedialog.component';
import { HttpClientModule } from '@angular/common/http';
import { IsmsTrainingComponent } from './isms-training/isms-training.component';
// import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginPageComponent,
    CheckEmailComponent,
    ChangePasswordComponent,
    HomedialogComponent,
    IsmsTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[HomedialogComponent]
})
export class AppModule { }
