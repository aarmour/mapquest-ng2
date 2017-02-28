import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { replace } from '@ngrx/router-store';

import { State } from '../../state';
import * as fromRoot from '../../state/reducers';

@Component({
  selector: 'mq-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mq-side-panel-container>
      <mq-side-panel [opened]="showSidePanel$ | async">
        <router-outlet></router-outlet>
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

  showSidePanel$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.showSidePanel$ = this.store.select(fromRoot.getHomeShowSidenav);
  }

  search(query) {
    this.store.dispatch(replace(['/search', query]));
  }

}
