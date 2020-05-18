import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const activeStyle = {
  color: 'black',
  fontWeight: '700',
};

const FilterLink = ({ filter, children }) => (
  <Link
    component={NavLink}
    exact
    to={`${process.env.ROUTE_TODO}${filter === 'all' ? '' : `/${filter}`}`}
    activeStyle={activeStyle}
  >
    {children}
  </Link>
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
