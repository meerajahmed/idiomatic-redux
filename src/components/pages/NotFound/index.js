import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="py-2">
    <div className="container-fluid">
      <h1 className="display-3">
        {'404 - '}
        <Link to="/">Go home</Link>
      </h1>
    </div>
  </div>
);

export default NotFound;
