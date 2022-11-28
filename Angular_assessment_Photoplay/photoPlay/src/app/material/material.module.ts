import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
// import { CommonModule } from '@angular/common';

const materialComponent= [MatIconModule]

@NgModule({
  declarations: [],
  imports: [
    materialComponent
  ],
  exports:[materialComponent]
})
export class MaterialModule { }
