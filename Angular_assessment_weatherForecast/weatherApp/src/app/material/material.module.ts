import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';


const materialComponents = [MatDialogModule,MatInputModule,MatFormFieldModule,MatIconModule,MatButtonModule,MatSidenavModule];

@NgModule({
  
  imports: [
    materialComponents
  ],
  exports:[materialComponents]
})
export class MaterialModule { }
