import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map'
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription'

import { State } from '../../state';
import * as layout from '../../state/home/layout/actions';
import * as search from '../../state/home/search/actions';

@Component({
  selector: 'mq-search-panel-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mq-side-panel-spacer height="60px" color="#000000"></mq-side-panel-spacer>
  `,
  styleUrls: ['search-panel-container.component.scss']
})
export class SearchPanelContainerComponent {

  actionsSubscription: Subscription;

  constructor(private store: Store<State>, route: ActivatedRoute) {
    this.actionsSubscription = route.params
      .select<string>('query')
      .map(query => new search.SearchAction(query))
      .subscribe(store);

    this.store.dispatch(new layout.OpenSidePanelAction());
  }

}
