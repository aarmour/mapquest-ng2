import { Action } from '@ngrx/store';
import { type } from '../../util';

export const ActionTypes = {
  OPEN_SIDE_PANEL: type('[Home:Layout] Open Side Panel'),
  CLOSE_SIDE_PANEL: type('[Home:Layout] Close Side Panel')
};

export class OpenSidePanelAction implements Action {
  type = ActionTypes.OPEN_SIDE_PANEL;
}

export class CloseSidePanelAction implements Action {
  type = ActionTypes.CLOSE_SIDE_PANEL;
}

export type Actions
  = OpenSidePanelAction
  | CloseSidePanelAction;
