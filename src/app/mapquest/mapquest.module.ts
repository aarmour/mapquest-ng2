import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

@NgModule({
  imports: [
    CommonModule
  ],
  providers: []
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
