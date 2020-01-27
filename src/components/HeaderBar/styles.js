import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device, colors } from 'styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  width: 100%;
  position: fixed;
  padding: 10px;
  top: 0;
  background: ${colors.header};
  z-index: 10;
  box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.3);
`;

export const LinkContainer = styled(Link)`
  width: 100%;

  h1 {
    font-size: 22px;
    transition: text-shadow 0.5s ease-out;
    &:hover {
      text-shadow: 0 2px 8px #000;
    }
    @media only screen and (${device.mobileS}) {
      font-size: 22px;
    }
    @media only screen and (${device.mobileM}) {
      font-size: 24px;
    }
    @media only screen and (${device.mobileL}) {
      font-size: 26px;
    }
    @media only screen and (${device.tablet}) {
      font-size: 30px;
    }
  }
`;
