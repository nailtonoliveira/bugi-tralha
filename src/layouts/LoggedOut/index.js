import React from 'react';
import PropTypes from 'prop-types';

import { Main } from './styles';

export default function LoggedOut({ children }) {
  return <Main>{children}</Main>;
}

LoggedOut.propTypes = {
  children: PropTypes.node.isRequired,
};
