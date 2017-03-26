import { ElementRef, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class MapMarkerElementsService {

  constructor(@Inject(DOCUMENT) private document: any) { }

  pinMarker(): ElementRef {
    const element = document.createElement('div');
    element.style.backgroundImage = 'url(assets/pin-18x24.svg)';
    element.style.width = '18px';
    element.style.height = '24px';
    return new ElementRef(element);
  }

  pinMarkerOptions(): Object {
    return { offset: [-9, -24] };
  }

}
