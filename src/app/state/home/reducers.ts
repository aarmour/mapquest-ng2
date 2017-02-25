import * as home from './actions';

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export function reducer(state = initialState, action: home.Actions): State {
  switch (action.type) {
    case home.ActionTypes.CLOSE_SIDENAV:
      return {
        showSidenav: false
      };

    case home.ActionTypes.OPEN_SIDENAV:
      return {
        showSidenav: true
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
