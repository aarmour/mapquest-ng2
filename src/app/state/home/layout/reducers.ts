import * as home from './actions';

export interface State {
  showSidePanel: boolean;
}

const initialState: State = {
  showSidePanel: false,
};

export function reducer(state = initialState, action: home.Actions): State {
  switch (action.type) {
    case home.ActionTypes.CLOSE_SIDE_PANEL:
      return {
        showSidePanel: false
      };

    case home.ActionTypes.OPEN_SIDE_PANEL:
      return {
        showSidePanel: true
      };

    default:
      return state;
  }
}

export const getShowSidePanel = (state: State) => state.showSidePanel;
