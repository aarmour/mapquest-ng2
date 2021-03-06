import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'mq-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultComponent {

  @Input() display: string = '';

  @Input()
  @HostBinding('class.selected')
  selected: boolean = false;

  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor() { }

}
