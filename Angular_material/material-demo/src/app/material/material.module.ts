import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';





const MaterialComponents=[MatButtonModule,MatButtonToggleModule,MatIconModule,MatBadgeModule,MatProgressSpinnerModule,MatProgressBarModule];


@NgModule({
  // declarations: [],
  imports: [
    MaterialComponents
    // CommonModule
  ],
  exports:[MaterialComponents]
})
export class MaterialModule {
  
 }
