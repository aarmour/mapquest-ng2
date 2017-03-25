import { Component, ElementRef, Input, ViewChild, forwardRef } from '@angular/core';

const ContainerControl = require('../../mapbox-plugins').ContainerControl;
import { ControlComponent } from './control.component';
import { SetMap } from '../metadata/control';

interface ContainerControl extends mapboxgl.Control {
  setDOMContent(element: any): ContainerControl;
}

@Component({
  selector: 'mb-container-control',
  template: `
    <div #content>
      <ng-content></ng-content>
    </div>
  `,
  providers: [{ provide: ControlComponent, useExisting: forwardRef(() => ContainerControlComponent) }]
})
export class ContainerControlComponent implements SetMap {

  private map: mapboxgl.Map;
  private control: ContainerControl;
  private contentObserver: any;

  @Input() position: string = 'top-left';

  @ViewChild('content') content: ElementRef;

  ngAfterViewInit() {
    const el = this.content.nativeElement.children[0];
    if (!el) return;
    const observer = this.contentObserver = new MutationObserver((mutations) => this.setContent());
    observer.observe(el, { childList: true, characterData: true, subtree: true });
  }

  mbSetMap(map: mapboxgl.Map) {
    this.map = map;
    this.control = new ContainerControl();
    this.map.addControl(this.control, this.position as any);
    this.setContent();
  }

  setContent() {
    if (!this.content) return;
    if (!this.control) return;

    const el = this.content.nativeElement.children[0];
    if (!el) return;

    this.control.setDOMContent(el);
  }

}
