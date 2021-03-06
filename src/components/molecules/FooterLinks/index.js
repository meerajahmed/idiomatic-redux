import React from 'react';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import FilterLink from '../../atoms/FilterLink';

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
    <Box my={8}>
      <Divider />
      <Box display="flex" justifyContent="flex-end" mt={8}>
        <FilterLink filter="all">All</FilterLink>
        <FilterLink filter="active">Active</FilterLink>
        <FilterLink filter="completed">Completed</FilterLink>
      </Box>
    </Box>
  );
};

export default FooterLinks;
