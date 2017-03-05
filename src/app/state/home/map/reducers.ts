import * as map from './actions';

export interface State {
  center: Object,
  zoom: number
}

const initialState: State = {
  center: { lng: -104.999693, lat: 39.750538 },
  zoom: 12
};

export function reducer(state = initialState, action: map.Actions) {
  switch (action.type) {
    case map.ActionTypes.SET_EXTENT: {
      const { center, zoom } = action.payload;
      return Object.assign({}, state, { center, zoom });
    }

    default: {
      return state;
    }
  }
}

export const getMapCenter = (state: State) => state.center;

export const getMapZoom = (state: State) => state.zoom;
