import TodoList from '../../../components/molecules/TodoList';
import getVisibleTodos from '../../organisms/Todos/selectors';
import { connect } from '../../../lib/react-redux';
import { toggleTodos } from '../../organisms/Todos/actions';

/**
 * All container components are similar. Their job is to connect a presentational component to the
 * Redux store and specify the data and the behavior that it needs
 * */

// data
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

// behaviour
const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodos(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
