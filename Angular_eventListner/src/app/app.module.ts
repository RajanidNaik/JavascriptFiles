import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverDirective } from './hover.directive';
import { BindhostDirective } from './bindhost.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    BindhostDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
