import * as layout from './layout/actions';
import * as search from './search/actions';

// export const ActionTypes = {
//   ...layout.ActionTypes,
//   ...search.ActionTypes
// };

export const ActionTypes = Object.assign({}, layout.ActionTypes, search.ActionTypes);

export type Actions
  = layout.Actions
  | search.Actions
