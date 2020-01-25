import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './styles';

function Logo({ size, color }) {
  return (
    <Title size={size} color={color}>
      What Movie?
    </Title>
  );
}

Logo.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
Logo.defaultProps = {
  size: 80,
  color: '#772F2F',
};

export default Logo;
