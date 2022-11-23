import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const MaterialComponents =[MatDialogModule,MatIconModule,MatFormFieldModule,MatInputModule]

@NgModule({
  // declarations: [],
  imports: [
    MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
