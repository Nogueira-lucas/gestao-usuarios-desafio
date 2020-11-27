import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserViewComponent } from './user-view/user-view.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { MaterialModule } from '../material/material.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 
    UserViewComponent, 
    UserCreateComponent, 
    UserHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UserViewComponent, 
    UserCreateComponent, 
    UserHomeComponent
  ]
})
export class PagesModule { }
