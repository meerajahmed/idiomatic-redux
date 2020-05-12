import React from 'react';
import FilterLink from '../../../containers/molecules/FilterLink';

/**
 * The FooterLinks component receives onFilterClick and currentFilter props from the parent component
 * and passes it to child components. This seems like a good opportunity for simplification.
 *
 * The filter link is a container component, so it is completely self-sufficient and can be used
 * inside the presentational components (FooterLinks), without passing additional props to get the
 * data from this chore and specify the behavior. This lets us keep the footer component simple and
 * decoupled from the behavior and the data that its child components need.
 *
 * */

const FooterLinks = () => {
  return (
    <p>
      show: <FilterLink filter="SHOW_ALL">All</FilterLink>{' '}
      <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>{' '}
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p>
  );
};

export default FooterLinks;
