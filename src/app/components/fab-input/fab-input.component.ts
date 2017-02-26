import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'mq-fab-input',
  template: `
    <div class="input-wrapper">
      <form (submit)="onSubmit($event)">
        <input type="text" #input>
      </form>
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

  @Output() submit: EventEmitter<any> = new EventEmitter();

  @ViewChild('input') input: ElementRef;

  toggle() {
    this.expanded = !this.expanded;
    if (this.expanded) this.input.nativeElement.focus();
  }

  onSubmit(e) {
    this.submit.emit(this.input.nativeElement.value);
    e.preventDefault();
    e.stopPropagation();
  }

}
