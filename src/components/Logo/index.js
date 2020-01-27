import React from 'react';
import PropTypes from 'prop-types';
import { colors } from 'styles/variables';
import { Title } from './styles';

function Logo({ size, color }) {
  return (
    <Title size={size} color={color} data-testid="logo">
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
  color: colors.logo,
};

export default Logo;
