import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';

import { FabInputComponent } from './fab-input/fab-input.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { SidePanelContainerComponent } from './side-panel/side-panel-container.component';

@NgModule({
  imports: [
    CommonModule,

    MaterialModule
  ],
  declarations: [
    FabInputComponent,
    SidePanelComponent,
    SidePanelContainerComponent
  ],
  exports: [
    FabInputComponent,
    SidePanelComponent,
    SidePanelContainerComponent
  ]
})
export class ComponentsModule { }
