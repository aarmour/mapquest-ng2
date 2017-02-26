import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';

import { FabInputComponent } from './fab-input/fab-input.component';

@NgModule({
  imports: [
    CommonModule,

    MaterialModule
  ],
  declarations: [
    FabInputComponent
  ],
  exports: [
    FabInputComponent
  ]
})
export class ComponentsModule { }
