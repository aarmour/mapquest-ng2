import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../../state';
import * as search from '../../state/home/search/actions';

@Component({
  selector: 'mq-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mq-side-panel-container>
      <mq-side-panel>
      </mq-side-panel>

      <mb-map>
        <mb-navigation-control></mb-navigation-control>
        <mb-container-control>
          <mq-fab-input icon="search" (submit)="search($event)"></mq-fab-input>
        </mb-container-control>
      </mb-map>
    </mq-side-panel-container>
  `,
  styleUrls: ['home-page.component.scss']
})
export class HomePageComponent {

  constructor(private store: Store<State>) {}

  search(query) {
    this.store.dispatch(new search.SearchAction(query));
  }

}
