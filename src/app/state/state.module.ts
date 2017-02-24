import { NgModule, ModuleWithProviders } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from './reducers';

@NgModule({
  imports: [
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter()
  ]
})
export class StateRootModule { }

@NgModule()
export class StateModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: StateRootModule };
  }
}
