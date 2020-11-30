import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserViewComponent } from './user-view/user-view.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsModalComponent } from '../components/user-details-modal/user-details-modal.component';
import { ShareComponentsModule } from '../components/components.modules';

@NgModule({
  declarations: [ 
    UserViewComponent, 
    UserCreateComponent, 
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ShareComponentsModule
  ],
  exports: [
    UserViewComponent, 
    UserCreateComponent, 
  ],
  entryComponents: [
    UserDetailsModalComponent
  ]
})
export class PagesModule { }
