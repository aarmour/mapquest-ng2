import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';

import { ComponentsModule } from '../components';
import { MapboxModule } from '../mapbox';
import { StateModule } from '../state';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPanelContainerComponent } from './search/search-panel-container.component';
import { SearchResultComponent } from './search/components/search-result/search-result.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    ComponentsModule,
    MapboxModule,
    StateModule,

    HomeRoutingModule
  ],
  declarations: [
    HomePageComponent,
    SearchPanelContainerComponent,
    SearchResultComponent
  ]
})
export class HomeModule { }
