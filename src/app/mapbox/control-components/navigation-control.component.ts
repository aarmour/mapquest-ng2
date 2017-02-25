import { Component, forwardRef } from '@angular/core';

import { SetMap } from '../metadata/control';
import { MapboxService } from '../mapbox.service';
import { ControlComponent } from './control.component';

@Component({
  selector: 'mb-navigation-control',
  template: '',
  providers: [{ provide: ControlComponent, useExisting: forwardRef(() => NavigationControlComponent) }]
})
export class NavigationControlComponent implements SetMap {

  private map: mapboxgl.Map;

  constructor(private mapbox: MapboxService) { }

  mbSetMap(map: mapboxgl.Map) {
    this.map = map;
    this.map.addControl(this.mapbox.navigationControl());
  }

}
