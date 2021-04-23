import * as types from '../Actions/types';

const initialState = {
  jobs: [],
  savedJobs: [],
  myJobs: [],
  endReached: false,
  error: null,
  msg: null,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LISTED_JOBS_FETCH_RESPONSE:
      const { refreshing, jobs, last } = action.payload
      if(refreshing) return {
        ...state, jobs, endReached: last,
      };
      return {
        ...state, jobs: state.jobs.concat(jobs), endReached: last,
      };
    case types.LISTED_JOBS_FETCH_FAILURE:
      return {
        ...state, error: action.payload,
      };
    case types.FETCH_MY_JOBS_RESPONSE:
      return {
        ...state, myJobs: action.payload.jobs,
      };
    case types.FETCH_MY_JOBS_FAILURE:
      return {
        ...state, error: action.payload,
      };
    case types.SAVED_JOBS_FETCH_RESPONSE:
      return {
        ...state, savedJobs: action.payload.jobs,
      };
    case types.SAVED_JOBS_FETCH_FAILURE:
      return {
        ...state, error: action.payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
