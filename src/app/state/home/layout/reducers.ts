import * as layout from './actions';

export interface State {
  showSidePanel: boolean;
}

const initialState: State = {
  showSidePanel: false,
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.ActionTypes.CLOSE_SIDE_PANEL:
      return {
        showSidePanel: false
      };

    case layout.ActionTypes.OPEN_SIDE_PANEL:
      return {
        showSidePanel: true
      };

    default:
      return state;
  }
}

export const getShowSidePanel = (state: State) => state.showSidePanel;
