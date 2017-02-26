import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { StateModule } from './state';
import { HomeModule } from './home';
import { MapboxModule } from './mapbox';
import { MapquestModule } from './mapquest';

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,

    StateModule.forRoot(),
    MapboxModule.forRoot(environment.mapbox.accessToken),
    MapquestModule.forRoot(environment.mapquest.apiKey),
    HomeModule,

    // The application routing module should always be last
    // because it contains the fall-through route.
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NotFoundPageComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
