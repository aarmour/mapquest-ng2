import { NgModule, ModuleWithProviders } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MapquestModule } from '../mapquest';

import { SearchEffects } from './home/search/effects';

import { reducer } from './reducers';

@NgModule({
  imports: [
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    MapquestModule,

    // EffectsModule.run(MapEffects),
    EffectsModule.run(SearchEffects)
  ]
})
export class StateRootModule { }

@NgModule()
export class StateModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: StateRootModule };
  }
}
