import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mq-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() display: string = '';

  constructor() { }

  ngOnInit() {
  }

}
