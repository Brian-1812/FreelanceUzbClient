import { put, call } from 'redux-saga/effects';
import * as jobActions from '../../Actions/JobActions';
import { getAll } from '../../../Services/Job/HandleJobRequest';

function* jobFetchSaga(action) {
  try {
    yield put(jobActions.enableLoader());
    const response = yield call(getAll, action.payload);
    if(response.jobs){
      yield put(jobActions.fetchListedJobsResponse({
        jobs: response.jobs, last: response.last, refreshing: action.payload.refreshing
      }));
    }else{
      yield put(jobActions.fetchListedJobsFailure(response.msg));
    }
  } catch (e) {
    console.log(e)
    yield put(jobActions.fetchListedJobsFailure(e.toString()));
  }
  yield put(jobActions.disableLoader());
}

export default jobFetchSaga;
