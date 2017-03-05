import { Action } from '@ngrx/store';
import { type } from '../../util'

export const ActionTypes = {
  SET_EXTENT: type('[Home:Map] Set Extent')
};

export class SetExtentAction implements Action {
  type = ActionTypes.SET_EXTENT;

  constructor(public payload: { center: mapboxgl.LngLat, zoom: number }) { }
}

export type Actions
  = SetExtentAction
