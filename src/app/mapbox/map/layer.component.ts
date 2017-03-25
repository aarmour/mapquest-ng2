import { Component, Input } from '@angular/core';

import { SetMap } from '../metadata/set-map';
import { MapboxService } from '../mapbox.service';

@Component({
  selector: 'mb-layer',
  template: ''
})
export class LayerComponent implements SetMap {

  private map: mapboxgl.Map;

  @Input('mb-id') id: string;
  @Input() layout: Object = { };
  @Input() paint: Object = { };
  @Input() source: string;
  @Input() type: string = 'symbol';

  constructor(private mapbox: MapboxService) { }

  mbSetMap(map: mapboxgl.Map) {
    this.map = map;
    if (this.map.loaded()) this.addLayer();
    else this.map.on('load', () => this.addLayer());
  }

  private addLayer() {
    this.map.addLayer({
      id: this.id,
      type: this.type,
      source: this.source,
      layout: this.layout,
      paint: this.paint
    });
    console.log(this.map.getLayer(this.id));
  }

}
