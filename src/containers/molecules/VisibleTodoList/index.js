import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TodoList from '../../../components/molecules/TodoList';
import { connect } from '../../../lib/react-redux';
import * as actions from '../../organisms/Todos/actions';
import { getVisibleTodos } from '../../organisms/Todos/reducers';

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
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <TodoList {...this.props} />;
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

VisibleTodoList.propTypes = {
  filter: PropTypes.string.isRequired,
  fetchTodos: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList));
