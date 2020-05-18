import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import TodoList from '../../../components/molecules/TodoList';
import { connect } from '../../../lib/react-redux';
import * as actions from '../../organisms/Todos/actions';
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../../organisms/Todos/reducers';
import FetchError from '../../../components/molecules/FetchError';

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
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  };

  render() {
    const { isFetching, errorMessage, todos, onTodoClick } = this.props;
    // show loading only when there is no cached todos to show
    if (isFetching && !todos.length) {
      return (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      );
    }

    if (errorMessage && !todos.length) {
      return <FetchError message={errorMessage} onRetry={() => this.fetchData()} />;
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
    errorMessage: getErrorMessage(state, filter),
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
});

VisibleTodoList.defaultProps = {
  errorMessage: null,
};

VisibleTodoList.propTypes = {
  filter: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  fetchTodos: PropTypes.func.isRequired,
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
