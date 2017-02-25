import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './map/map.component';
import {
  ContainerControlComponent,
  NavigationControlComponent
} from './control-components';
import { MapboxService } from './mapbox.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MapComponent,
    ContainerControlComponent,
    NavigationControlComponent
  ],
  providers: [
    MapboxService
  ],
  exports: [
    MapComponent,
    ContainerControlComponent,
    NavigationControlComponent
  ]
})
export class MapboxModule {
  static forRoot(config: String): ModuleWithProviders {
    return {
      ngModule: MapboxModule,
      providers: [
        { provide: 'MAPBOX_KEY', useValue: config }
      ]
    };
  }
}
