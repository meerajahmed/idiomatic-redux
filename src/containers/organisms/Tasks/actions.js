import { ADD_TASK, ADD_TASK_ASYNC, UPDATE_TASK_STATUS } from './constants';

export const addTask = ({ task }) => ({
  type: ADD_TASK,
  payload: { task },
});

export const addTaskAsync = (task) => ({
  type: ADD_TASK_ASYNC,
  payload: { task },
});

export const updateTaskStatus = (id, status) => ({
  type: UPDATE_TASK_STATUS,
  payload: { id, status },
});
