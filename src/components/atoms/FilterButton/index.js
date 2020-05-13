import React from 'react';

const FilterButton = (props) => {
  // eslint-disable-next-line react/prop-types
  const { active, children, onClick } = props;

  if (active) {
    return <span>{children}</span>;
  }
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default FilterButton;
