import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    HomeRoutingModule
  ],
  declarations: [
    HomePageComponent
  ]
})
export class HomeModule { }
