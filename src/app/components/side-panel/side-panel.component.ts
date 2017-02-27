import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mq-side-panel',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  @Input()
  @HostBinding('class.opened')
  opened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
