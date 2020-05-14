import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    to={`${process.env.ROUTE_TODO}${filter === 'all' ? '' : `/${filter}`}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black',
    }}
  >
    {children}
  </NavLink>
);

FilterLink.defaultProps = {
  filter: null,
  children: null,
};

FilterLink.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']),
  children: PropTypes.node,
};

export default FilterLink;
