import { take, put, delay, actionChannel } from 'redux-saga/effects';
import { ADD_TASK_ASYNC } from './constants';
import { addTask } from './actions';

export default function* addTaskAsync() {
  // buffer incoming ADD_TASK_ASYNC messages if the Saga is not yet ready to take them
  const addTaskChannel = yield actionChannel(ADD_TASK_ASYNC);
  while (true) {
    const { payload } = yield take(addTaskChannel);
    yield delay(100); // save in DB here...
    yield put(addTask(payload)); // update store
  }
}
