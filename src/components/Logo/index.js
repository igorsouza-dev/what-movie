import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './styles';

function Logo({ size }) {
  return <Title size={size}>What Movie?</Title>;
}

Logo.propTypes = {
  size: PropTypes.number,
};
Logo.defaultProps = {
  size: 80,
};

export default Logo;
