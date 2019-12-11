import React from 'react';
import PropTypes from 'prop-types';

export default function LoggedIn({ children }) {
  return <div>{children}</div>;
}

LoggedIn.propTypes = {
  children: PropTypes.node.isRequired,
};
