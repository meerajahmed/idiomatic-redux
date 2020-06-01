import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const FetchError = (props) => {
  const { message, onRetry } = props;
  return (
    <div>
      <p>Could not fetch todos. {message}</p>
      <Button type="button" variant="outlined" color="primary" onClick={onRetry}>
        Retry
      </Button>
    </div>
  );
};

FetchError.defaultProps = {
  onRetry: () => {},
};

FetchError.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func,
};

export default FetchError;
