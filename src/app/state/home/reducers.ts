import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as fromLayout from './layout/reducers';
import * as fromSearch from './search/reducers';

export interface State {
  layout: Object,
  search: Object
};

const reducers = {
  layout: fromLayout.reducer,
  search: fromSearch.reducer
};

export const reducer = combineReducers(reducers);

/**
 * Layout
 */

export const getLayoutState = (state: State) => state.layout;

export const getShowSidePanel = createSelector(getLayoutState, fromLayout.getShowSidePanel);

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
