import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChildSecondComponent } from './child-second/child-second.component';
import { ChildThreeComponent } from './child-three/child-three.component';
import { SharedService } from './shared.service';
import { FormsModule } from '@angular/forms';
import { ChildFourComponent } from './child-four/child-four.component';
import { SubjectService } from './subject.service';
import { ChildFiveComponent } from './child-five/child-five.component';
import { ChildSixComponent } from './child-six/child-six.component'
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildSecondComponent,
    ChildThreeComponent,
    ChildFourComponent,
    ChildFiveComponent,
    ChildSixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SharedService,SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
