import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  forwardRef
} from '@angular/core';

import { MapboxService } from '../mapbox.service';
import { ControlComponent } from '../control';
import { LayerComponent } from './layer.component';
import { SourceComponent } from '../source';

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
  @Input() center: { lng: number, lat: number } = { lng: 0, lat: 0};
  @Input() zoom: number = 0;

  @Output() move: EventEmitter<any> = new EventEmitter();
  @Output() moveend: EventEmitter<any> = new EventEmitter();
  @Output() movestart: EventEmitter<any> = new EventEmitter();

  @ContentChildren(forwardRef(() => ControlComponent)) controls: QueryList<any>;
  @ContentChildren(LayerComponent) layers: QueryList<any>;
  @ContentChildren(forwardRef(() => SourceComponent)) sources: QueryList<any>;

  constructor(private mapbox: MapboxService) {
    this.id = mapbox.nextId();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.map) return;
    if ('center' in changes || 'zoom' in changes) {
      if (this.extentHasChanged()) {
        this.map.flyTo({
          center: this.center as mapboxgl.LngLat,
          zoom: this.zoom
        });
      }
    }
  }

  ngAfterViewInit() {
    this.map = this.mapbox.map({
      container: this.id,
      style: this.style,
      zoom: this.zoom,
      center: this.center
    });

    this.mapbox.bindToOutputs(this.map, [
      ['move', this.move],
      ['moveend', this.moveend],
      ['movestart', this.movestart]
    ]);

    this.addControls();
    this.addSources();
    this.addLayers();
  }

  private addControls() {
    if (!this.controls) return;
    this.controls.forEach((control) => control.mbSetMap(this.map));
  }

  private addLayers() {
    if (!this.layers) return;
    this.layers.forEach((layer) => layer.mbSetMap(this.map));
  }

  private addSources() {
    if (!this.sources) return;
    this.sources.forEach((source) => source.mbSetMap(this.map));
  }

  private extentHasChanged() {
    const { center, zoom } = this;
    const currentCenter = this.map.getCenter();
    const currentZoom = this.map.getZoom();
    return (center !== currentCenter || zoom !== currentZoom);
  }

}
