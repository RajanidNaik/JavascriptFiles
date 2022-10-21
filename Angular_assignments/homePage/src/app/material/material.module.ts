import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


const materialComponents=[MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule,MatIconModule];
@NgModule({
  // declarations: [],
  imports: [materialComponents
    // CommonModule
  ],
  exports:[materialComponents]
})
export class MaterialModule { }
