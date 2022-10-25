import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipePipe } from './custompipe.pipe';
import { StudentComponent } from './student/student.component';
import { StudentPipe } from './student.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CustompipePipe,
    StudentComponent,
    StudentPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
