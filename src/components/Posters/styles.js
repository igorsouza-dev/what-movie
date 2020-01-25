import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => props.type};
  ${props => {
    if (props.type === 'flex') {
      return 'overflow-x: scroll;';
    }
    return '';
  }}

  padding: 10px;
`;
