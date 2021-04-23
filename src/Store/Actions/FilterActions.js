import * as types from './types'

export const changeFilters = payload => ({
  type: types.CHANGE_FILTER_ITEMS,
  payload,
});

export const clearFilters = () => ({
  type: types.CLEAR_FILTER_ITEMS,
});