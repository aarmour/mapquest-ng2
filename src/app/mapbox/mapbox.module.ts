import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ContainerControlComponent,
  NavigationControlComponent
} from './control';
import {
  LayerComponent,
  MapComponent,
  MarkerComponent
} from './map';
import { GeojsonSourceComponent } from './source';
import { MapboxService } from './mapbox.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContainerControlComponent,
    GeojsonSourceComponent,
    LayerComponent,
    MapComponent,
    MarkerComponent,
    NavigationControlComponent
  ],
  providers: [
    MapboxService
  ],
  exports: [
    ContainerControlComponent,
    GeojsonSourceComponent,
    LayerComponent,
    MapComponent,
    MarkerComponent,
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
