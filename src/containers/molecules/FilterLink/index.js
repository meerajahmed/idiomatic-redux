import React, { Component } from 'react';
import FilterButton from '../../../components/atoms/FilterButton';
import store from '../../organisms/Todos/store';

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
    // eslint-disable-next-line react/prop-types
    const state = store.getStore();
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

export default FilterLink;
