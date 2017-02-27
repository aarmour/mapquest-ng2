import { Component } from '@angular/core';

@Component({
  selector: 'mq-side-panel-container',
  template: `
    <ng-content select="mq-side-panel"></ng-content>

    <div class="side-panel-content">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['side-panel-container.component.scss']
})
export class SidePanelContainerComponent {

  constructor() { }

}
