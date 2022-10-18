import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


const material=[MatButtonModule,MatMenuModule,MatInputModule,MatFormFieldModule,MatDividerModule,MatProgressSpinnerModule,MatDialogModule,MatToolbarModule,MatCardModule,MatIconModule];

@NgModule({
  // declarations: [],
  imports: [material
    // CommonModule
  ],
  exports:[material]
})
export class MaterialModuleModule { }
