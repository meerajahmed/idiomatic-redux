import { fork } from 'redux-saga/effects';

import addTaskAsync from '../../containers/organisms/Tasks/sagas';

export default function* rootSaga() {
  yield fork(addTaskAsync);
}
