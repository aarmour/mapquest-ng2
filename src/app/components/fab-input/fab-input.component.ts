import { Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'mq-fab-input',
  template: `
    <div class="input-wrapper">
      <input type="text" #input>
    </div>
    <button md-mini-fab [color]="color" (click)="toggle()">
      <md-icon>{{icon}}</md-icon>
    </button>
  `,
  styleUrls: ['fab-input.component.scss']
})
export class FabInputComponent {

  @Input() color: 'primary' | 'secondary' | 'warn' = 'primary';
  @Input() icon: string;

  @HostBinding('class.expanded')
  @Input()
  expanded: boolean = false;

  @ViewChild('input') input: ElementRef;

  toggle() {
    this.expanded = !this.expanded;
    if (this.expanded) this.input.nativeElement.focus();
  }

}
