import { put, call } from 'redux-saga/effects';
import * as jobActions from '../../Actions/JobActions';
import { getMine } from '../../../Services/Job/HandleJobRequest';

function* fetchMine(action) {
  try {
    yield put(jobActions.enableLoader());
    const response = yield call(getMine);
    if(response.jobs){
      yield put(jobActions.fetchMyJobsResponse(response));
    }else{
      yield put(jobActions.fetchMyJobsFailure(response.msg));
    }
  } catch (e) {
    console.log(e)
    yield put(jobActions.fetchMyJobsFailure(e.toString()));
  }
  yield put(jobActions.disableLoader());
}

export default fetchMine;
