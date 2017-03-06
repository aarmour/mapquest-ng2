import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import { environment } from '../../environments/environment';

import * as fromHome from './home/reducers';

export interface State {
  home: fromHome.State;
  router: fromRouter.RouterState;
}

const reducers = {
  home: fromHome.reducer,
  router: fromRouter.routerReducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}

/**
 * Home Reducers
 */

export const getHomeState = (state: State) => state.home;

export const getHomeShowSidenav = createSelector(getHomeState, fromHome.getShowSidePanel);

export const getHomeMapCenter = createSelector(getHomeState, fromHome.getMapCenter);

export const getHomeMapZoom = createSelector(getHomeState, fromHome.getMapZoom);

export const getSearchLoading = createSelector(getHomeState, fromHome.getSearchLoading);

export const getSearchEntities = createSelector(getHomeState, fromHome.getSearchEntities);

export const getSearchEntitiesAsList = createSelector(getHomeState, fromHome.getSearchEntitiesAsList);

export const getSelectedSearchEntitiesAsList = createSelector(getHomeState, fromHome.getSelectedSearchEntitiesAsList);

export const getSelectedSearchResult = createSelector(getHomeState, fromHome.getSelectedSearchResult);

export const getSelectedSearchResultId = createSelector(getHomeState, fromHome.getSelectedSearchResultId);
