import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map'
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

import { State } from '../../state';
import * as fromRoot from '../../state/reducers';
import * as layout from '../../state/home/layout/actions';
import * as search from '../../state/home/search/actions';

@Component({
  selector: 'mq-search-panel-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mq-side-panel-spacer height="60px" color="#000000"></mq-side-panel-spacer>
    <div class="search-results-container">
      <mq-search-result
        *ngFor="let result of searchResults$ | async"
        [display]="result.displayString"
        [selected]="(selectedSearchResultId$ | async) === result.id"
        (select)="onSelectSearchResult(result)"
      >
      </mq-search-result>
    </div>
  `,
  styleUrls: ['search-panel-container.component.scss']
})
export class SearchPanelContainerComponent {

  actionsSubscription: Subscription;
  searchResults$: Observable<Object>;
  selectedSearchResultId$: Observable<string>;

  constructor(private store: Store<State>, route: ActivatedRoute) {
    this.actionsSubscription = route.params
      .select<string>('query')
      .map(query => new search.SearchAction(query))
      .subscribe(store);

    this.searchResults$ = this.store.select(fromRoot.getSelectedSearchEntitiesAsList);

    this.selectedSearchResultId$ = this.store.select(fromRoot.getSelectedSearchResultId);

    this.store.dispatch(new layout.OpenSidePanelAction());
  }

  onSelectSearchResult(result) {
    this.store.dispatch(new search.SelectSearchResultAction(result.id));
  }

}
