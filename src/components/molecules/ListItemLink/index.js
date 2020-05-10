import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const ListItemLink = (props) => {
  const { icon, primary, to } = props;
  const match = useRouteMatch(to);
  const renderLink = useMemo(
    () =>
      // eslint-disable-next-line react/jsx-props-no-spreading
      forwardRef((itemProp, ref) => <RouterLink to={to} ref={ref} {...itemProp} />),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink} selected={match?.isExact}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

ListItemLink.defaultProps = {
  icon: null,
};

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ListItemLink;
