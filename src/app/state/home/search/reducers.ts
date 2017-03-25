import { featureCollection } from '@turf/helpers';
const merge = require('lodash.merge');

import * as search from './actions';

export interface State {
  ids: string[];
  entities: Object;
  selected: string,
  loading: boolean;
  query: string;
}

const initialState: State = {
  ids: [],
  entities: {},
  selected: '',
  loading: false,
  query: ''
}

function decorate(result: any): any {
  return merge({}, result, {
    place: {
      properties: { $icon: icon(result.recordType) }
    }
  });
}

function icon(recordType: string): string {
  switch(recordType) {
    case 'airport': return 'airport-11';
    default: return 'circle-stroked-11';
  }
}

export function reducer(state = initialState, action: search.Actions): State {
  switch (action.type) {
    case search.ActionTypes.SEARCH: {
      const query = action.payload;

      if (query === '') {
        return Object.assign({}, state, {
          ids: [],
          loading: false,
          query
        });
      }

      return Object.assign({}, state, {
        loading: true,
        query
      });
    }

    case search.ActionTypes.SEARCH_COMPLETE: {
      const { results } = action.payload;
      const entities = results.reduce((entities: any, result: any) => {
        return Object.assign({}, entities, { [result.id]: decorate(result) });
      }, {});

      return Object.assign({}, state, {
        ids: results.map((result: any) => result.id),
        entities: Object.assign({}, state.entities, entities),
        loading: false
      });
    }

    case search.ActionTypes.SELECT_SEARCH_RESULT: {
      const id = action.payload;

      return Object.assign({}, state, {
        selected: id
      });
    }

    default: {
      return state;
    }
  }
}

export const getIds = (state: State) => state.ids;

export const getEntities = (state: State) => state.entities;

export const getEntitiesAsList = (state: State) => Object.keys(state.entities)
  .reduce((entities, id) => {
    entities.push(state.entities[id]);
    return entities;
  }, []);

export const getSelectedEntitiesGeoJson = (state: State) => featureCollection(state.ids.map((id) => state.entities[id].place));

export const getSelectedEntitiesAsList = (state: State) => state.ids
  .map((id) => state.entities[id]);

export const getSelectedSearchResult = (state: State) => state.entities[state.selected];

export const getSelectedSearchResultId = (state: State) => state.selected;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;
