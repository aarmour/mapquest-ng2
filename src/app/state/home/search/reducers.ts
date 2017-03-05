import * as search from './actions';

export interface State {
  ids: string[];
  entities: Object;
  loading: boolean;
  query: string;
}

const initialState: State = {
  ids: [],
  entities: {},
  loading: false,
  query: ''
}

export function reducer(state = initialState, action: search.Actions): State {
  switch (action.type) {
    case search.ActionTypes.SEARCH: {
      const query = action.payload;

      if (query === '') {
        return {
          ids: [],
          entities: state.entities,
          loading: false,
          query
        };
      }

      return Object.assign({}, state, {
        loading: true,
        query
      });
    }

    case search.ActionTypes.SEARCH_COMPLETE: {
      const { results } = action.payload;
      const entities = results.reduce((entities, result) => {
        entities[result.id] = result;
        return entities;
      }, {});

      return {
        ids: results.map(result => result.id),
        entities: Object.assign({}, state.entities, entities),
        loading: false,
        query: state.query
      };
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

export const getSelectedEntitiesAsList = (state: State) => state.ids
  .map((id) => state.entities[id]);

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;
