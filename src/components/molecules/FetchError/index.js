import React from 'react';
import PropTypes from 'prop-types';

const FetchError = (props) => {
  const { message, onRetry } = props;
  return (
    <div>
      <p>Could not fetch todos. {message}</p>
      <button type="button" onClick={onRetry}>
        retry
      </button>
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
