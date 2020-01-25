import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => props.type};
  ${props => {
    if (props.type === 'flex') {
      return 'overflow-x: scroll;';
    }
    return `
      grid-template-columns: repeat(5, 185px);
      grid-gap: 5px;
    `;
  }}

  padding: 10px;
`;
