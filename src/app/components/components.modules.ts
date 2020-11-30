import { NgModule } from '@angular/core';
import { UserDetailsModalComponent } from './user-details-modal/user-details-modal.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserDetailsModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UserDetailsModalComponent
  ]
})
export class ShareComponentsModule {}