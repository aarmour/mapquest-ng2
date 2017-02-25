import { AfterViewInit, Component, ContentChildren, EventEmitter, Input, OnChanges, Output, QueryList, SimpleChanges, forwardRef } from '@angular/core';

import { MapboxService } from '../mapbox.service';
import { ControlComponent } from '../control-components/control.component';

@Component({
  selector: 'mb-map',
  template: `
    <div [attr.id]="id" style="position: relative; overflow: hidden; height: 100%;">
    </div>
  `
})
export class MapComponent implements AfterViewInit, OnChanges {

  private id: string;
  private map: mapboxgl.Map;

  @Input() style: string = 'mapbox://styles/mapbox/light-v9';
  @Input() lng: number = 0;
  @Input() lat: number = 0;
  @Input() zoom: number = 0;

  @Output() move: EventEmitter<any> = new EventEmitter();
  @Output() moveend: EventEmitter<any> = new EventEmitter();
  @Output() movestart: EventEmitter<any> = new EventEmitter();

  @ContentChildren(forwardRef(() => ControlComponent)) controls: QueryList<any>;

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

    this.addControls();
  }

  private addControls() {
    if (!this.controls) return;
    this.controls.forEach((control) => control.mbSetMap(this.map));
  }

}
