import { Component, ElementRef, Input } from '@angular/core';

import { SetMap } from '../metadata/set-map';
import { MapboxService } from '../mapbox.service';

@Component({
  selector: 'mb-marker',
  template: ''
})
export class MarkerComponent implements SetMap {

  private map: mapboxgl.Map;
  private marker: mapboxgl.Marker;

  @Input() element: ElementRef;
  @Input() lngLat: mapboxgl.LngLat;
  @Input() offset: number[];

  constructor(private mapbox: MapboxService) { }

  ngOnChanges() {
    this.update();
  }

  ngOnDestroy() {
    if (!this.marker) return;
    this.marker.remove();
  }

  mbSetMap(map: mapboxgl.Map) {
    this.map = map;
  }

  private addMarker() {
    if (!this.map || !this.lngLat) return;
    this.marker = this.mapbox
      .marker(this.element.nativeElement, { offset: this.offset })
      .setLngLat(this.lngLat)
      .addTo(this.map);
    this.update();
  }

  private update() {
    if (!this.marker) return this.addMarker();
    if (this.marker && !this.lngLat) {
      this.marker.remove();
      this.marker = null;
      return;
    }
    if (!this.lngLat) return;
    this.marker.setLngLat(this.lngLat);
  }

}
