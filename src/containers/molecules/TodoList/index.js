import { withRouter } from 'react-router-dom';
import TodoList from '../../../components/molecules/TodoList';
import { connect } from '../../../lib/react-redux';
import { toggleTodos } from '../../organisms/Todos/actions';
import { getVisibleTodos } from '../../organisms/Todos/reducers';

/**
 * All container components are similar. Their job is to connect a presentational component to the
 * Redux store and specify the data and the behavior that it needs
 * */

// data
const mapStateToProps = (state, props) => {
  const {
    match: {
      params: { filter = 'all' },
    },
  } = props;
  return {
    todos: getVisibleTodos(state, filter),
  };
};

// behaviour
const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodos(id));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));
