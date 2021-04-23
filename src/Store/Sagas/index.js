import { takeLatest } from 'redux-saga/effects';
import * as types from '../Actions/types'
import * as jobSagas from './Job/index'

function* mySaga() {
  yield takeLatest(types.LISTED_JOBS_FETCH_REQUEST, jobSagas.FetchListedJobs);
  yield takeLatest(types.LISTED_JOBS_FILTERED_FETCH_REQUEST, jobSagas.FetchFilteredJobs);
  yield takeLatest(types.FETCH_MY_JOBS_REQUEST, jobSagas.FetchMyJobs);
  yield takeLatest(types.SAVED_JOBS_FETCH_REQUEST, jobSagas.FetchSavedJobs);
}

export default mySaga;
