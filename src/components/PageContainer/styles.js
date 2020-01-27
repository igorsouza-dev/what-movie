import styled from 'styled-components';
import { device, screenSize } from 'styles/variables';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  padding-top: 80px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  max-width: 900px;

  @media only screen and (${device.mobileS}) {
    max-width: ${screenSize.mobileS};
  }
  @media only screen and (${device.mobileM}) {
    max-width: ${screenSize.mobileM};
  }
  @media only screen and (${device.mobileL}) {
    max-width: ${screenSize.mobileL};
  }
  @media only screen and (${device.tablet}) {
    max-width: ${screenSize.tablet};
  }
  @media only screen and (${device.laptop}) {
    max-width: ${screenSize.laptop};
  }
  @media only screen and (${device.laptopL}) {
    max-width: ${screenSize.laptopL};
  }
  @media only screen and (${device.desktop}) {
    max-width: ${screenSize.desktop};
  }
`;
