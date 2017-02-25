import { EventEmitter, Injectable, Inject } from '@angular/core';

const createId = require('hat');
const mapbox = require('mapbox-gl/dist/mapbox-gl');

@Injectable()
export class MapboxService {

  constructor(@Inject('MAPBOX_KEY') private accessToken: string) {
    mapbox.accessToken = accessToken;
  }

  bindToOutputs(map: any, outputs: Array<Array<any>>) {
    outputs.forEach(([name, output]) => {
      map.on(name, (e) => output.emit(e));
    });
  }

  nextId(): string {
    return createId();
  }

  map(options: Object) {
    return new mapbox.Map(options);
  }

}
