import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './map/map.component';
import { MapboxService } from './mapbox.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MapComponent
  ],
  providers: [
    MapboxService
  ],
  exports: [
    MapComponent
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
