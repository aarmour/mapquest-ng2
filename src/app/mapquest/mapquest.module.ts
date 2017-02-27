import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { MapquestSearchAheadService, MapquestSearchService } from './api';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MapquestSearchAheadService,
    MapquestSearchService
  ]
})
export class MapquestModule {

  static forRoot(config: String): ModuleWithProviders {
    return {
      ngModule: MapquestModule,
      providers: [
        { provide: 'MAPQUEST_KEY', useValue: config }
      ]
    };
  }

}
