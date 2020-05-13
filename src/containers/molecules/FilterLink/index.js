import React, { Component } from 'react';
import FilterButton from '../../../components/atoms/FilterButton';
import { ReactReduxContext } from '../../../lib/react-redux/Context';

/**
 * As a container component, the filter link doesn't have its own markup.
 * It delegates rendering to the link presentational component
 * */
class FilterLink extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
  }

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { filter, children } = this.props;
    const { store } = this.context;
    // eslint-disable-next-line react/prop-types
    const state = store.getState();
    return (
      <FilterButton
        active={filter === state.visibilityFilter}
        onClick={() => {
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter,
          });
        }}
      >
        {children}
      </FilterButton>
    );
  }
}

FilterLink.contextType = ReactReduxContext;

export default FilterLink;
