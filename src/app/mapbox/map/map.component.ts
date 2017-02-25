import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { MapboxService } from '../mapbox.service';

@Component({
  selector: 'mb-map',
  template: `
    <div [attr.id]="id" style="position: relative; overflow: hidden; height: 100%;">
      <ng-content></ng-content>
    </div>
  `
})
export class MapComponent implements AfterViewInit, OnChanges {

  private id;
  private map;

  @Input() style: string = 'mapbox://styles/mapbox/light-v9';
  @Input() lng: number = 0;
  @Input() lat: number = 0;
  @Input() zoom: number = 0;

  @Output() move: EventEmitter<any> = new EventEmitter();
  @Output() moveend: EventEmitter<any> = new EventEmitter();
  @Output() movestart: EventEmitter<any> = new EventEmitter();

  constructor(private mapbox: MapboxService) {
    this.id = mapbox.nextId();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('lng' in changes || 'lat' in changes || 'zoom' in changes) {
      this.map.flyTo({
        center: [this.lng, this.lat],
        zoom: this.zoom
      });
    }
  }

  ngAfterViewInit() {
    this.map = this.mapbox.map({
      container: this.id,
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });

    this.mapbox.bindToOutputs(this.map, [
      ['move', this.move],
      ['moveend', this.moveend],
      ['movestart', this.movestart]
    ]);
  }

}
