import * as types from '../Actions/types';

const initalState = {
  mainLoader: false,
};

const loaderReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.GENERAL_ENABLE_LOADER:
      return { ...state, mainLoader: true };
    case types.GENERAL_DISABLE_LOADER:
      return { ...state, mainLoader: false };
    default:
      return state;
  }
};

export default loaderReducer;
