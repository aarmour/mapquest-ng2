import { Action } from '@ngrx/store';
import { type } from '../../util';

export const ActionTypes = {
  SEARCH: type('[Home:Search] Search'),
  SEARCH_COMPLETE: type('[Home:Search] Search Complete'),
  SELECT_SEARCH_RESULT: type('[Home:Search] Select Search Result')
};

export class SearchAction implements Action {
  type = ActionTypes.SEARCH;

  constructor(public payload: string) { }
}

export class SearchCompleteAction implements Action {
  type = ActionTypes.SEARCH_COMPLETE;

  constructor(public payload) { }
}

export class SelectSearchResultAction implements Action {
  type = ActionTypes.SELECT_SEARCH_RESULT;

  constructor(public payload) { }
}

export type Actions
  = SearchAction
  | SearchCompleteAction
  | SelectSearchResultAction
