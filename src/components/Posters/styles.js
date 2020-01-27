import styled from 'styled-components';
import { device, posterSize, screenSize } from 'styles/variables';

export const Container = styled.div`
  display: ${(props) => props.type};
  ${(props) => {
    if (props.type === 'flex') {
      return `
        overflow-x: auto;
        min-height: max-content;
      `;
    }
    return `

      @media only screen and (max-width: 409px) {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        max-width: 300px;
        overflow-x: auto;
      }
      @media only screen and (min-width: 410px) and (max-width: 584px) {
        display: grid;
        grid-gap: 5px;
        padding: 10px;
        grid-template-columns: repeat(2, ${posterSize}px);
        max-width: ${screenSize.mobileL};
      }
      @media only screen and (min-width: 585px) and (max-width: 784px) {
        display: grid;
        grid-gap: 5px;
        padding: 10px;
        grid-template-columns: repeat(3, ${posterSize}px);
        max-width: ${screenSize.tablet};
      }
      @media only screen and (min-width: 785px) and (max-width: 1024px)  {
        display: grid;
        grid-gap: 5px;
        padding: 10px;
        grid-template-columns: repeat(4, ${posterSize}px);
        max-width: ${screenSize.laptop};
      }
      @media only screen and (min-width: 1025px) {
        display: grid;
        grid-gap: 5px;
        padding: 10px;
        grid-template-columns: repeat(5, ${posterSize}px);
        max-width: ${screenSize.laptop};
      }
      @media only screen and (min-width: 1440px) {
        display: grid;
        grid-gap: 5px;
        padding: 10px;
        grid-template-columns: repeat(6, ${posterSize}px);
        max-width: ${screenSize.laptop};
      }
    `;
  }}

  padding: 10px;
`;
