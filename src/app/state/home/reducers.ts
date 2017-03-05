import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as fromLayout from './layout/reducers';
import * as fromMap from './map/reducers';
import * as fromSearch from './search/reducers';

export interface State {
  layout: Object,
  map: Object,
  search: Object
};

const reducers = {
  layout: fromLayout.reducer,
  map: fromMap.reducer,
  search: fromSearch.reducer
};

export const reducer = combineReducers(reducers);

/**
 * Layout
 */

export const getLayoutState = (state: State) => state.layout;

export const getShowSidePanel = createSelector(getLayoutState, fromLayout.getShowSidePanel);

/**
 * Map
 */

export const getMapState = (state: State) => state.map;

export const getMapCenter = createSelector(getMapState, fromMap.getMapCenter);

export const getMapZoom = createSelector(getMapState, fromMap.getMapZoom);

/**
 * Search
 */

export const getSearchState = (state: State) => state.search;

export const getSearchIds = createSelector(getSearchState, fromSearch.getIds);

export const getSearchEntities = createSelector(getSearchState, fromSearch.getEntities);

export const getSearchEntitiesAsList = createSelector(getSearchState, fromSearch.getEntitiesAsList);

export const getSelectedSearchEntitiesAsList = createSelector(getSearchState, fromSearch.getSelectedEntitiesAsList);

export const getSearchQuery = createSelector(getSearchState, fromSearch.getQuery);

export const getSearchLoading = createSelector(getSearchState, fromSearch.getLoading);
