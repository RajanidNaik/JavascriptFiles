import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

const materialComponents=[MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule,MatIconModule,MatToolbarModule,MatDatepickerModule,MatDialogModule,MatCheckboxModule];
@NgModule({
  // declarations: [],
  imports: [materialComponents,MatNativeDateModule
    // CommonModule
  ],
  exports:[materialComponents]
})
export class MaterialModule { }
