import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Oleo Script', cursive;
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  width: 100%;
  text-align: center;
`;
