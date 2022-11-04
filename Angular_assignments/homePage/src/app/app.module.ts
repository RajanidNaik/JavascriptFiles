import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckEmailComponent } from './check-email/check-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomedialogComponent } from './homedialog/homedialog.component';
import { HttpClientModule } from '@angular/common/http';
import { IsmsTrainingComponent } from './isms-training/isms-training.component';
import { AddRemoveAdminComponent } from './add-remove-admin/add-remove-admin.component';
import { AddRemoveSuperAdminComponent } from './add-remove-super-admin/add-remove-super-admin.component';
// import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginPageComponent,
    CheckEmailComponent,
    ChangePasswordComponent,
    HomedialogComponent,
    IsmsTrainingComponent,
    AddRemoveAdminComponent,
    AddRemoveSuperAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[HomedialogComponent]
})
export class AppModule { }
