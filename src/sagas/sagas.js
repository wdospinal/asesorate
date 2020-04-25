import { put, takeEvery } from 'redux-saga/effects';
import * as actions from '../constants/actions';
import Axios from 'axios';
const url = 'https://us-central1-krumpir-4537f.cloudfunctions.net';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const request = {
     ...action.payload
    };
    const grades = yield Axios.post(`${url}/grades`, request);// refactor: fetch
    yield put({ type: actions.GRADES_FETCH_SUCCEEDED, grades });
  } catch (e) {
    yield put({ type: actions.GRADES_FETCH_FAILED, message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(actions.GET_GRADES, fetchUser);
}

export default mySaga;
