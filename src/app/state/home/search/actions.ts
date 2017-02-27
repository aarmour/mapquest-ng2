import { Action } from '@ngrx/store';
import { type } from '../../util';

export const ActionTypes = {
  SEARCH: type('[Search] Search'),
  SEARCH_COMPLETE: type('[Search] Search Complete')
};

export class SearchAction implements Action {
  type = ActionTypes.SEARCH;

  constructor(public payload: string) { }
}

export class SearchCompleteAction implements Action {
  type = ActionTypes.SEARCH_COMPLETE;

  constructor(public payload) { }
}

export type Actions
  = SearchAction
  | SearchCompleteAction
