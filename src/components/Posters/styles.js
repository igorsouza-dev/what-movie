import styled from 'styled-components';
import { device, posterSize, screenSize } from 'styles/variables';

export const Container = styled.div`
  display: ${props => props.type};
  ${props => {
    if (props.type === 'flex') {
      return 'overflow-x: scroll;';
    }
    return `
      grid-template-columns: repeat(5, ${posterSize}px);
      grid-gap: 5px;
      padding: 10px;
      @media only screen and (max-width: ${screenSize.mobileL}) {
        margin-top: 25px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        max-width: ${screenSize.mobileM};
        overflow-x: scroll;
      }
      @media only screen and (${device.mobileS}) {
        max-width: ${screenSize.mobileS};
        grid-template-columns: repeat(2, ${posterSize}px);
      }
      @media only screen and (${device.mobileL}) {
        grid-template-columns: repeat(2, ${posterSize}px);
        max-width: ${screenSize.mobileL};
      }
      @media only screen and (${device.tablet}) {
        grid-template-columns: repeat(3, ${posterSize}px);
        max-width: ${screenSize.tablet};
      }
      @media only screen and (${device.laptop}) {
        grid-template-columns: repeat(5, ${posterSize}px);
        max-width: ${screenSize.laptop};
      }
    `;
  }}

  padding: 10px;
`;
