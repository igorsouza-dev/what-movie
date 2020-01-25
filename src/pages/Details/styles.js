import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  ${props =>
    props.background
      ? `background: url(${props.background}) no-repeat center;`
      : ''};
`;
