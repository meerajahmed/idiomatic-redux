import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TodoList from '../../../components/molecules/TodoList';
import { connect } from '../../../lib/react-redux';
import * as actions from '../../organisms/Todos/actions';
import { getVisibleTodos, getIsFetching } from '../../organisms/Todos/reducers';

/**
 * All container components are similar. Their job is to connect a presentational component to the
 * Redux store and specify the data and the behavior that it needs
 * */

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const { filter } = this.props;
    if (prevProps.filter !== filter) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const { filter, fetchTodos, requestTodos } = this.props;
    requestTodos(filter);
    fetchTodos(filter);
  };

  render() {
    const { isFetching, todos, onTodoClick } = this.props;
    // show loading only when ther is no cached todos to show
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }
    return <TodoList todos={todos} onTodoClick={onTodoClick} />;
  }
}

// data
const mapStateToProps = (state, props) => {
  const {
    match: {
      params: { filter = 'all' },
    },
  } = props;
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    filter,
  };
};

// behaviour
const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(actions.toggleTodos(id));
  },
  fetchTodos(filter) {
    dispatch(actions.fetchTodos(filter));
  },
  requestTodos(filter) {
    dispatch(actions.requestTodos(filter));
  },
});

VisibleTodoList.propTypes = {
  filter: PropTypes.string.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  requestTodos: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      completed: PropTypes.bool,
    })
  ).isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList));
