import { put, call } from 'redux-saga/effects';
import * as jobActions from '../../Actions/JobActions';
import { getSaved } from '../../../Services/Job/SavedJobs';

function* fetchSaved(action) {
  try {
    yield put(jobActions.enableLoader());
    const response = yield call(getSaved);
    if(response.jobs){
      yield put(jobActions.fetchSavedJobsResponse(response));
    }else{
      yield put(jobActions.fetchSavedJobsFailure(response.msg));
    }
  } catch (e) {
    console.log(e)
    yield put(jobActions.fetchSavedJobsFailure(e.toString()));
  }
  yield put(jobActions.disableLoader());
}

export default fetchSaved;
