import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { MapquestSearchAheadService } from '../../../mapquest';
import * as search from './actions';

@Injectable()
export class SearchEffects {

  constructor(private actions$: Actions, private mapquestSearchAhead: MapquestSearchAheadService) { }

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(search.ActionTypes.SEARCH)
    .debounceTime(300)
    .map((action: search.SearchAction) => action.payload)
    .switchMap(query => {
      if (query === '') return empty();

      const nextSearch$ = this.actions$.ofType(search.ActionTypes.SEARCH).skip(1);
      const collection = ['address', 'adminArea', 'airport'];

      return this.mapquestSearchAhead.prediction({ q: query, collection })
        .takeUntil(nextSearch$)
        .map(results => new search.SearchCompleteAction(results))
        .catch(() => of(new search.SearchCompleteAction([])));
    });

}
