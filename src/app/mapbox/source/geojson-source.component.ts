import {
  Component,
  Input,
  SimpleChanges,
  forwardRef
} from '@angular/core';
import { featureCollection } from '@turf/helpers';

import { MapboxService } from '../mapbox.service';
import { SetMap } from '../metadata/set-map';
import { SourceComponent } from './source.component';

@Component({
  selector: 'mb-geojson-source',
  template: '',
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => GeojsonSourceComponent) }]
})
export class GeojsonSourceComponent implements SetMap {

  private map: mapboxgl.Map;

  @Input('mb-id') id: string;
  @Input() data: GeoJSON.FeatureCollection<GeoJSON.GeometryObject>;

  constructor(private mapbox: MapboxService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.data) this.data = featureCollection([]);

    const data = (changes as any).data;
    if (data.currentValue !== data.previousValue) this.update();
  }

  mbSetMap(map: mapboxgl.Map) {
    this.map = map;
    if (this.map.loaded()) this.addSource();
    else this.map.on('load', () => this.addSource());
  }

  private addSource() {
    this.map.addSource(this.id, {
      type: 'geojson',
      data: this.data
    });
  }

  private update() {
    if (!this.map) return;

    const source = this.map.getSource(this.id) as mapboxgl.GeoJSONSource;
    if (!source) return;
    source.setData(this.data);
  }

}
