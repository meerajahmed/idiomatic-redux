import combineReducers from '../../../../lib/redux/combineReducers';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

// this has two concerns how the array is updated and how an individual todo is updated.
// reducers can call other reducers to delegate the handling of some part of state they manage

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed'),
});

export default combineReducers({
  byId,
  listByFilter,
});

// selector
export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map((id) => fromById.getTodo(state.byId, id));
};

export const getIsFetching = (state, filter) => fromList.getIsFetching(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter]);
