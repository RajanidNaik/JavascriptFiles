import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerService } from './server.service';
import { StorageComponent } from './storage/storage.component'
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [
    AppComponent,
    StudentCreateComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServerService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
