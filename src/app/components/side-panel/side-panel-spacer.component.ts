import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'mq-side-panel-spacer',
  template: '',
  styles: [':host { display: block; }']
})
export class SidePanelSpacerComponent {

  @Input()
  @HostBinding('style.height')
  height: string;

  @Input()
  @HostBinding('style.background-color')
  color: string;

  constructor() { }

}
