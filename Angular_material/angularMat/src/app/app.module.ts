import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { DialogComponent } from './dialog/dialog.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogExampleComponent
  ],
  entryComponents:[DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
